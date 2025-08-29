---
title: "Building a RAG System with Gemini and LangChain"
date: "2024-07-20"
author: "Sami Halawa"
summary: "A step-by-step tutorial on creating a Retrieval-Augmented Generation (RAG) system using Google's Gemini Pro and the LangChain framework to build powerful, context-aware AI applications."
slug: "building-rag-with-gemini-langchain"
---

## What is RAG?

Retrieval-Augmented Generation (RAG) is a powerful technique that enhances Large Language Models (LLMs) by providing them with external knowledge. Instead of relying solely on its training data, a RAG system first retrieves relevant information from a specified knowledge base (like your company's documents) and then uses that information as context to generate a more accurate and relevant response.

This approach is crucial for building applications that need to answer questions based on specific, up-to-date, or proprietary information.

## The Architecture

Our RAG system will have a few core components:
1.  **Document Loaders:** To load our knowledge base (e.g., text files, PDFs).
2.  **Text Splitters:** To break down large documents into smaller, manageable chunks.
3.  **Vector Store & Embeddings:** To convert text chunks into numerical representations (embeddings) and store them in a searchable database (vector store).
4.  **Retriever:** To find the most relevant text chunks based on a user's query.
5.  **LLM (Gemini):** To generate an answer using the user's query and the retrieved context.

## Step-by-Step Implementation with LangChain

Let's build a simple RAG system using LangChain and the Gemini API.

### 1. Setup and Installation
First, install the necessary libraries:
```bash
pip install langchain langchain-google-genai python-dotenv
```

### 2. Load and Process Documents
We'll load our documents and split them into chunks.

```python
from langchain_community.document_loaders import TextLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter

# Load documents
loader = TextLoader("./my-knowledge-base.txt")
documents = loader.load()

# Split documents into chunks
text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=100)
docs = text_splitter.split_documents(documents)
```

### 3. Create Vector Store
We'll use Google's generative AI embeddings and an in-memory FAISS vector store.

```python
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain_community.vectorstores import FAISS
import os

# Set up embeddings model
embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001", google_api_key=os.environ["API_KEY"])

# Create vector store from documents
vector_store = FAISS.from_documents(docs, embeddings)
retriever = vector_store.as_retriever()
```

### 4. Create the RAG Chain
Now, we'll create a prompt template and chain it all together with the Gemini model.

```python
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.prompts import ChatPromptTemplate
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain.chains import create_retrieval_chain

# Initialize the Gemini model
llm = ChatGoogleGenerativeAI(model="gemini-2.5-flash", google_api_key=os.environ["API_KEY"])

# Create the prompt
prompt = ChatPromptTemplate.from_template("""
Answer the following question based only on the provided context:

<context>
{context}
</context>

Question: {input}
""")

# Create the chains
document_chain = create_stuff_documents_chain(llm, prompt)
retrieval_chain = create_retrieval_chain(retriever, document_chain)

# Invoke the chain
response = retrieval_chain.invoke({"input": "What is the core principle of our company?"})
print(response["answer"])
```

## Conclusion
You've just built a functional RAG pipeline! This system can now answer questions by retrieving information from your custom knowledge base, providing much more accurate and contextually relevant answers than an LLM alone. From here, you can expand it with more complex retrievers, different document types, and a user-facing interface.