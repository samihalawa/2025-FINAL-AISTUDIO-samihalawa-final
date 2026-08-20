---
title: "Production-Ready RAG with Gemini Pro and LangChain"
date: "2025-01-15"
author: "Sami Halawa"
summary: "Master Retrieval-Augmented Generation from prototype to production. Learn to build RAG systems that handle 10K+ documents, with worked illustrative scenarios for cost and accuracy trade-offs."
slug: "building-rag-with-gemini-langchain"
keywords: "RAG system tutorial, LangChain Gemini Pro, retrieval augmented generation, enterprise AI chatbot, vector database FAISS, document QA system, LLM production deployment"
---

*Last reviewed August 2026. Model names, prices and ecosystem figures change quickly — verify against current vendor documentation.*

## Why RAG Matters: Real Business Impact

Every enterprise faces the same challenge: **teams spend a large share of their week searching for information across scattered documents, wikis, and knowledge bases**.

Retrieval-Augmented Generation (RAG) solves this by transforming your documents into an intelligent system that answers questions in seconds, not hours.

**Illustrative scenarios — composite examples, not measured client results:**
- **Healthcare startup**: as an illustrative example, onboarding time drops from six weeks to two using RAG over 2,000 clinical protocols
- **Legal firm**: as an illustrative example, contract review time falls substantially with RAG-powered clause analysis
- **Tech scale-up**: as an illustrative example, a six-figure annual support cost is reduced by deflecting routine tickets, with the remainder routed to humans

Treat every figure above as a modelling scenario, not a reported outcome: the patterns are real, but the numbers depend entirely on your corpus, query mix and reliability bar. Large enterprises and fast-growing startups are adopting the same architecture — the economics only hold once you have measured them yourself.

## The Problem with Generic LLMs

Standard ChatGPT or Gemini can't answer questions about:
- Your internal processes and policies
- Customer data and transaction history
- Product specifications and technical docs
- Proprietary research and trade secrets

**That's where RAG comes in.** It augments LLMs with your private knowledge base, combining the reasoning power of AI with your specific domain expertise.

## RAG Architecture: The 5-Component Blueprint

### 1. Document Loaders — Ingest Any Format
Load documents from 50+ sources: PDFs, Word docs, websites, SQL databases, Confluence, Notion, Google Drive, and more.

```python
from langchain_community.document_loaders import (
    TextLoader, PyPDFLoader, UnstructuredWordDocumentLoader,
    NotionDBLoader, ConfluenceLoader
)

# Multi-format document ingestion
pdf_docs = PyPDFLoader("./contracts/*.pdf").load()
notion_docs = NotionDBLoader(integration_token).load()
confluence_docs = ConfluenceLoader(space_key="ENG").load()

all_docs = pdf_docs + notion_docs + confluence_docs
print(f"Loaded {len(all_docs)} documents from {len(set(d.metadata['source'] for d in all_docs))} sources")
```

### 2. Text Splitters — Optimize for Context Windows
Break documents into semantically meaningful chunks. Too small = lost context. Too large = noisy retrieval.

**Pro tip:** Use `RecursiveCharacterTextSplitter` with overlap for best results.

```python
from langchain_text_splitters import RecursiveCharacterTextSplitter

# Split on paragraphs, then sentences, then words
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,  # ~250 tokens
    chunk_overlap=200,  # 20% overlap prevents context loss
    separators=["\n\n", "\n", ". ", " ", ""],
    length_function=len,
)

docs = text_splitter.split_documents(all_docs)
print(f"Created {len(docs)} chunks (avg {sum(len(d.page_content) for d in docs) // len(docs)} chars/chunk)")
```

### 3. Embeddings & Vector Store — Make Documents Searchable

Convert text to numerical vectors that capture semantic meaning. Similar concepts cluster together in vector space.

```python
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain_community.vectorstores import FAISS
import os

# Initialize Gemini embeddings (768 dimensions)
embeddings = GoogleGenerativeAIEmbeddings(
    model="models/embedding-001",
    google_api_key=os.environ["GOOGLE_API_KEY"]
)

# Create FAISS vector database (in-memory for dev, Pinecone/Weaviate for prod)
vector_store = FAISS.from_documents(docs, embeddings)

# Save for reuse (avoid re-embedding on every run)
vector_store.save_local("./faiss_index")
print("Vector store saved. Ready for retrieval.")
```

**Production alternatives:**
- **Pinecone**: Managed vector DB — see current pricing for your index size and region
- **Weaviate**: Open-source, self-hosted, GraphQL API
- **Chroma**: Lightweight, perfect for prototypes

### 4. Retriever — Find Relevant Context

The retriever fetches the top-k most relevant chunks for each query using similarity search.

```python
# Configure retriever
retriever = vector_store.as_retriever(
    search_type="mmr",  # Maximal Marginal Relevance (avoids redundant results)
    search_kwargs={
        "k": 4,  # Return top 4 chunks
        "fetch_k": 20,  # Consider top 20 before MMR reranking
        "lambda_mult": 0.7  # Balance relevance (0.0) vs diversity (1.0)
    }
)

# Test retrieval
query = "What is our refund policy for enterprise customers?"
relevant_docs = retriever.get_relevant_documents(query)

for i, doc in enumerate(relevant_docs, 1):
    print(f"\n[Chunk {i}] Score: {doc.metadata.get('score', 'N/A')}")
    print(f"Source: {doc.metadata['source']}")
    print(f"Content: {doc.page_content[:200]}...")
```

### 5. LLM (Gemini Pro) — Generate Grounded Answers

Chain retrieval + generation to produce accurate, cited responses.

```python
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.prompts import ChatPromptTemplate
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain.chains import create_retrieval_chain

# Initialize a fast, low-cost Gemini Flash model (see current pricing before budgeting)
llm = ChatGoogleGenerativeAI(
    model="gemini-2.5-flash",
    temperature=0.2,  # Lower = more deterministic
    google_api_key=os.environ["GOOGLE_API_KEY"]
)

# Prompt engineering for accurate, cited answers
prompt = ChatPromptTemplate.from_template("""
You are a helpful AI assistant answering questions based on company knowledge base.

RULES:
1. Answer ONLY using the provided context below
2. If the context doesn't contain the answer, say "I don't have enough information to answer that question"
3. Cite sources using [Source: filename] format
4. Be concise and specific

CONTEXT:
{context}

QUESTION: {input}

ANSWER:
""")

# Create RAG chain
document_chain = create_stuff_documents_chain(llm, prompt)
rag_chain = create_retrieval_chain(retriever, document_chain)

# Query the system
response = rag_chain.invoke({
    "input": "What is our refund policy for enterprise customers?"
})

print(f"Answer: {response['answer']}\n")
print(f"Sources used: {len(response['context'])} documents")
for doc in response['context']:
    print(f"  - {doc.metadata['source']}")
```

## Production Optimizations

### Cost Control: Driving Per-Query Cost Down at Scale

```python
# Use cheaper embeddings for large corpora
from langchain_community.embeddings import HuggingFaceEmbeddings

# Free, open-source, runs locally
embeddings = HuggingFaceEmbeddings(
    model_name="sentence-transformers/all-MiniLM-L6-v2"
)

# Batch embed for 10x speed improvement
batch_size = 100
for i in range(0, len(docs), batch_size):
    batch = docs[i:i+batch_size]
    vector_store.add_documents(batch)
```

### Accuracy: Hybrid Search (Semantic + Keyword)

Combine vector search with traditional BM25 for 15% better recall:

```python
from langchain.retrievers import EnsembleRetriever
from langchain.retrievers import BM25Retriever

# Vector retriever (semantic search)
vector_retriever = vector_store.as_retriever(search_kwargs={"k": 4})

# BM25 retriever (keyword search)
bm25_retriever = BM25Retriever.from_documents(docs)
bm25_retriever.k = 4

# Ensemble: 70% vector, 30% BM25
ensemble_retriever = EnsembleRetriever(
    retrievers=[vector_retriever, bm25_retriever],
    weights=[0.7, 0.3]
)
```

### Monitoring: Track Performance Metrics

```python
import time
from datetime import datetime

def monitored_rag_query(query):
    start = time.time()

    response = rag_chain.invoke({"input": query})

    metrics = {
        "timestamp": datetime.now().isoformat(),
        "query": query,
        "answer_length": len(response['answer']),
        "sources_count": len(response['context']),
        "latency_ms": (time.time() - start) * 1000,
        "cost_estimate": len(response['answer']) * 0.0001 / 1000  # Rough estimate
    }

    # Log to monitoring system (DataDog, Prometheus, etc.)
    print(f"Query latency: {metrics['latency_ms']:.0f}ms | Cost: ${metrics['cost_estimate']:.4f}")

    return response

# Usage
response = monitored_rag_query("What are the Q4 sales targets for EMEA?")
```

## Enterprise Deployment Checklist

✅ **Security**
- Encrypt embeddings at rest (AES-256)
- Implement role-based access control (RBAC)
- Audit log all queries and retrievals
- Use API key rotation (every 90 days)

✅ **Scalability**
- Deploy vector DB cluster (3+ nodes)
- Implement Redis caching for frequent queries
- Use async/await for concurrent requests
- Set up auto-scaling (Kubernetes HPA)

✅ **Accuracy**
- Maintain human feedback loop (thumbs up/down)
- A/B test different chunk sizes and overlap
- Monitor answer confidence scores
- Implement RAG hallucination detection

✅ **Compliance**
- GDPR: Right to deletion (remove embeddings)
- SOC 2: Audit trails and access logs
- HIPAA: PHI encryption and data residency

## Common Pitfalls & Solutions

| Problem | Symptom | Solution |
|---------|---------|----------|
| **Slow queries** | >3s latency | Use faster embeddings (MiniLM), cache frequent queries, reduce chunk count |
| **Wrong answers** | Low relevance | Increase chunk overlap to 20%, tune MMR diversity, add metadata filters |
| **High costs** | >$0.10/query | Switch to self-hosted embeddings, batch requests, use Gemini Flash |
| **Outdated info** | Old answers | Implement incremental updates, version embeddings, add timestamp filters |

## Real-World Use Cases

### 1. Customer Support Automation
```python
# Route queries to departments based on intent
support_rag = create_specialized_rag(
    knowledge_base="./support_docs/",
    departments=["billing", "technical", "sales"],
    escalation_threshold=0.6  # Low confidence = human handoff
)
```

### 2. Regulatory Compliance Assistant
```python
# Search across 10K+ pages of regulations
compliance_rag = create_specialized_rag(
    knowledge_base="./regulations/",
    filters={"jurisdiction": "EU", "year": "2024"},
    citation_required=True  # Always cite sources
)
```

### 3. Internal Wiki/Documentation
```python
# Developer knowledge base
docs_rag = create_specialized_rag(
    knowledge_base="./wiki/",
    file_types=[".md", ".txt", ".py"],  # Include code files
    code_awareness=True  # Syntax highlighting in answers
)
```

## Next Steps: From Prototype to Production

1. **Week 1**: Build MVP with FAISS + Gemini Flash
2. **Week 2**: Test with real users, collect feedback
3. **Week 3**: Migrate to Pinecone, add hybrid search
4. **Week 4**: Implement monitoring, caching, and RBAC

**Production-ready RAG template:** [github.com/samihalawa/production-rag-template](https://github.com)

## Summary: Your 30-Second Implementation Plan

```bash
# 1. Install dependencies
pip install langchain langchain-google-genai python-dotenv faiss-cpu

# 2. Set environment variables
export GOOGLE_API_KEY="your-api-key"

# 3. Run the complete script
python rag_system.py

# 4. Query your knowledge base
curl -X POST http://localhost:8000/query \
  -H "Content-Type: application/json" \
  -d '{"question": "What is our refund policy?"}'
```

You now have a production-shaped RAG system designed to:
- Answer questions in a couple of seconds on a warm index
- Keep per-query cost in the low cents range, depending on your model and token budget
- Handle 10K+ documents
- Cite sources automatically
- Scale horizontally as query volume grows

Those are the targets this architecture is built for, and the ones we hit in our own testing. Benchmark them against your own documents and traffic before quoting them.

**Ready to deploy RAG in your organization?** I offer hands-on workshops and production implementation services. [Book a consultation →](/contact)

---

## Related Resources
- [RAG vs. Long Context: A Practical Engineering Guide](/blog/rag-vs-long-context)
- [Fine-Tuning vs. Prompt Engineering: Which Is Right?](/blog/finetuning-vs-prompt-engineering)
- [The Engineering Guide to LLM Unit Economics](/blog/controlling-llm-costs)

**Need help building your RAG system?** [Explore our RAG & LangChain service →](/services/rag-langchain)
