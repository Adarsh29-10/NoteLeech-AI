from fastapi import FastAPI
from pydantic import BaseModel
from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_qdrant import QdrantVectorStore
from ollama import Client
import os

app = FastAPI()

client = Client(
    host = "http://localhost:11434/"
)
# Request model
class ChatRequest(BaseModel):
    question: str
    pdfPath: str


@app.post("/ask")
def ask_pdf(req: ChatRequest):
    question = req.question
    pdf_path = req.pdfPath

    # Ensure file exists
    if not os.path.exists(pdf_path):
        return {"answer": f"PDF not found at {pdf_path}"}

    # Load and split the PDF
    loader = PyPDFLoader(pdf_path)
    docs = loader.load()

    text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
    split_docs = text_splitter.split_documents(docs)

    # Use free HuggingFace Embeddings
    embedding_model = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")

    # Create vector store in Qdrant
    vector_store = QdrantVectorStore.from_documents(
        documents=split_docs,
        url="http://localhost:6333",
        collection_name="chat_pdf_free_collection",
        embedding=embedding_model,
    )

    # Retrieve similar chunks for the question
    search_results = vector_store.similarity_search(query=question, k=5)

    if not search_results:
        return {"answer": "No relevant information found in the document."}

    # Combine results into a context string
    context = "\n\n".join(
        [
            f"Page Content: {result.page_content}\n"
            f"Page Number: {result.metadata.get('page_label', 'N/A')}\n"
            f"Source: {result.metadata.get('source', pdf_path)}"
            for result in search_results
        ]
    )

    # ✅ system prompt
    system_prompt = f"""
    You are an AI assistant who extracts **exact answers** from the provided context.
    Follow these rules strictly:
    1. Answer **only based on context**.
    2. Give **concise, structured answers** (use bullet points if multiple items).
    3. Mention the **exact page number and file location** if available.
    4. If the answer is not in the context, say: "Not found in the context."

    Context:
    {context}
    """

    # Ask Ollama (Llama3 or Mistral)
    response = client.chat(
        model="llama3",  # You can replace with "mistral" or "phi3" if installed
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": question},
        ],
    )

    # Return model response
    return {"answer": response.message["content"] if response.message else "No response from model"}
