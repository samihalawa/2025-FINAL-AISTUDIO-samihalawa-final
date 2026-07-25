---
title: "Verifying AI-Generated Code: Beyond Type Checks"
excerpt: "AI-generated code is a powerful tool, but 'typecheck passed' is never enough. Learn how to truly verify agent-generated changes, from end-to-end flow testing to diff analysis and characterization tests, to catch plausible-but-wrong AI outputs."
publishedAt: "2026-07-15T22:00:38.519Z"
tags: ["agentic-coding", "code-review", "testing", "verification"]
sourceName: "content-hub-pages"
sourceUrl: "content-hub:pages/ai-code-review-and-verification"
locale: "en"
hubId: "d122a46f3242f2aa0cc151b81d3ca6eb"
metaTitle: "Verifying AI-Generated Code: Beyond Type Checks"
metaDescription: "AI-generated code is a powerful tool, but 'typecheck passed' is never enough. Learn how to truly verify agent-generated changes, from end-to-end flow testing to diff analysis and characterization tests, to catch plausible-but-wrong AI outputs."
contentHash: "61c1d98d197614faa7d089c1954958599d3e9720ebab27167b38e781626623aa"
---
As an AI engineer building agentic coding workflows, I've seen firsthand the power and peril of AI-generated code. The promise is immense: faster development, automated refactors, and even entirely new functionalities conjured from a prompt. But the reality is, trusting `typecheck passed` as your sole verification step for AI-written code is a recipe for disaster. It's necessary, yes, but never sufficient. AI models are masters of plausible-but-wrong, and without a robust verification strategy, you'll be shipping subtle, insidious bugs.

My experience has taught me that verifying AI-generated changes requires a multi-layered approach, combining automated checks with human intelligence and a healthy dose of skepticism. Here's how I approach it.

## The Illusion of Correctness: Why Type Checks Fall Short

Type checks, linters, and even basic unit tests are excellent first-line defenses. They catch syntax errors, type mismatches, and obvious logical flaws. For AI-generated code, they're crucial for ensuring the output is even syntactically valid and adheres to basic structural constraints. However, they operate at a superficial level. A type checker doesn't understand intent, business logic, or the subtle interactions within a complex system. It won't tell you if the AI misinterpreted a requirement, introduced an off-by-one error in a loop, or swapped two parameters that are both of the same type but have different semantic meanings.

Consider a scenario where an AI is asked to refactor a date parsing utility. It might correctly change `Date.parse(str)` to `new Date(str)` for a specific format, and all types will align. But if the original `Date.parse` handled a wider range of formats or edge cases that `new Date()` doesn't, the AI's change, while type-safe, is functionally incorrect. The system will compile, tests might pass if they don't cover the specific edge cases, and you'll have a silent regression.

## A Practical Verification Checklist for AI-Generated Code

To truly verify AI-generated code, you need to go beyond the superficial. Here's my checklist, ordered roughly by increasing effort and decreasing automation:

### 1. Read the Diff, Critically

This is non-negotiable. Before you even think about merging, you *must* read the diff. Don't skim. Don't assume the AI is perfect. Look for:

*   **Unexpected changes:** Did the AI touch files or areas it wasn't supposed to? This often indicates a misunderstanding of the prompt or a hallucination.
*   **Semantic correctness:** Does the code actually do what you intended? Are variable names sensible? Are conditions logically sound? AI can generate syntactically correct but semantically nonsensical code.
*   **Edge cases and error handling:** Did the AI consider nulls, empty inputs, or boundary conditions? Often, AI-generated code is optimistic and lacks robust error handling.
*   **Performance implications:** Did the AI introduce inefficient algorithms or data structures? A simple refactor might inadvertently change an O(1) operation to O(N).
*   **Security vulnerabilities:** Is the AI introducing SQL injection vectors, insecure deserialization, or other common vulnerabilities? AI models are trained on vast datasets, including vulnerable code.
*   **Code style and conventions:** While less critical for correctness, consistent style is important for maintainability. Does the AI adhere to your team's established style guides?

This step requires human expertise. Your brain is the best pattern matcher for subtle logical flaws and deviations from intent.

### 2. Drive the Affected Flow End-to-End

This is where the rubber meets the road. If the AI changed a backend API, make a request to it. If it modified a UI component, interact with it in the browser. Don't just look at the code; *use* the feature. This catches integration issues, UI glitches, and unexpected side effects that automated tests might miss.

For example, if an AI refactors a user registration flow, manually go through the entire process: create an account, log in, reset password. Observe the UI, check network requests, and verify data persistence. This is especially critical for changes that span multiple layers of the application.

### 3. Same-Layer Proof for Promised Behavior

For any change, there should be a corresponding proof that the promised behavior is delivered. This often means writing or updating tests. If the AI added a new feature, write a unit or integration test for it. If it refactored an existing function, ensure existing tests still pass and consider adding new ones that specifically target the refactored logic or newly discovered edge cases.

This is not about blindly trusting existing tests. It's about actively asserting the *new* or *changed* behavior. For instance, if an AI is asked to optimize a database query, you'd want to run the query and verify its performance characteristics (e.g., using `EXPLAIN ANALYZE`) and that it returns the correct data. This is a "same-layer proof" because you're verifying the database layer's behavior at the database layer.

### 4. Characterization Tests for Legacy Refactors

When dealing with legacy code, especially when an AI is tasked with refactoring a complex, undocumented module, characterization tests (also known as "golden master" tests) are invaluable. These tests capture the *current* behavior of the system, however quirky or incorrect, before you make any changes. They act as a safety net, ensuring that your refactor (or the AI's refactor) doesn't inadvertently alter existing behavior.

To create a characterization test:

1.  Identify the component or function to be refactored.
2.  Provide a range of inputs that cover typical and edge cases.
3.  Record the outputs of the current implementation.
4.  Write a test that asserts the outputs for those inputs match the recorded "golden master" outputs.

After the AI refactors the code, run these characterization tests. If they pass, you have a strong indication that the external behavior of the component hasn't changed, even if the internal implementation has been completely rewritten. This is particularly useful when the AI is making large-scale structural changes.

### 5. Catching Plausible-But-Wrong Changes

This is the AI's superpower and your biggest challenge. Plausible-but-wrong changes are those that look correct on the surface, pass basic checks, but fail under specific conditions or misinterpret the underlying intent. Examples include:

*   **Off-by-one errors:** A loop iterating `n` times instead of `n-1` or `n+1`.
*   **Incorrect data type conversions:** Converting a string to an integer without handling non-numeric inputs gracefully.
*   **Misinterpretation of requirements:** The AI generates code that solves a slightly different problem than the one you intended.
*   **Subtle race conditions:** Introducing concurrency issues that are hard to reproduce.
*   **Incorrect API usage:** Using a library function with parameters in the wrong order or misunderstanding its side effects.

Catching these requires a combination of the above techniques, but primarily relies on the human reviewer's domain knowledge and critical thinking. When reviewing the diff, actively question *why* the AI made a particular choice. If it's not immediately obvious, investigate. If the AI introduces a new algorithm, try to mentally trace its execution with a few inputs. This is where your experience as an engineer truly shines.

## Where AI Review Helps vs. Misses

AI can also assist in the review process, but it has its own limitations:

**Where AI Review Helps:**

*   **Syntax and style adherence:** AI can quickly flag deviations from coding standards, missing semicolons, or incorrect indentation.
*   **Basic bug detection:** Some AI tools can identify common anti-patterns, potential null pointer dereferences, or unhandled exceptions.
*   **Suggesting improvements:** AI can often propose alternative, more idiomatic, or more performant ways to write certain code constructs.
*   **Documentation generation:** AI can help generate comments, docstrings, or even higher-level documentation for new code.

**Where AI Review Misses:**

*   **Semantic correctness and business logic:** AI struggles to understand the deeper meaning and intent behind the code within the context of your specific application.
*   **Complex architectural implications:** It won't understand how a change in one module impacts the overall system architecture or performance characteristics.
*   **Security vulnerabilities requiring context:** While it can flag generic issues, AI often misses context-dependent security flaws.
*   **Subtle performance regressions:** Without actual execution and profiling, AI can't reliably detect performance bottlenecks.
*   **Misinterpretation of requirements:** AI cannot question the original prompt or infer unstated requirements.

## Conclusion: Trust, But Verify, Relentlessly

AI is an incredibly powerful co-pilot, but it's not a replacement for human engineering judgment. The goal isn't to blindly accept AI's output, but to leverage its speed and generation capabilities while applying rigorous human verification. `typecheck passed` is the bare minimum. To ship reliable software with AI, you need to cultivate a verification mindset that goes deep: scrutinize the diff, exercise the full flow, prove the promised behavior, leverage characterization tests, and always be on the lookout for the plausible-but-wrong. This disciplined approach is how we harness the power of AI without sacrificing quality or introducing insidious bugs into our systems.
