import type { Handler } from '@netlify/functions'
import { GoogleGenAI } from '@google/genai'

// Minimal JSON body schema
interface ChatBody {
  message: string
  projectTitle?: string
  description?: string
  summary?: string
  features?: string[]
}

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
}

export const handler: Handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: cors, body: '' }
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: cors, body: 'Method Not Allowed' }
  }

  try {
    const apiKey = process.env.GENAI_API_KEY || process.env.GOOGLE_GENAI_API_KEY || process.env.API_KEY
    if (!apiKey) {
      return { statusCode: 500, headers: cors, body: 'Server not configured with GENAI_API_KEY' }
    }

    const body = JSON.parse(event.body || '{}') as ChatBody
    const { message, projectTitle, description, summary, features } = body
    if (!message || typeof message !== 'string') {
      return { statusCode: 400, headers: cors, body: 'Invalid message' }
    }

    const ai = new GoogleGenAI({ apiKey })

    const systemInstruction = `You are a helpful and friendly AI assistant for a professional portfolio.
Project: ${projectTitle || 'Project'}
Description: ${description || ''}
Summary: ${summary || ''}
Key Features:\n${(features || []).map((f) => `- ${f}`).join('\n')}
Constraints: Be concise, professional, accurate; if unsure, say you don\'t know.`

    const chat = await ai.chats.create({
      model: 'gemini-2.5-flash',
      config: { systemInstruction },
    })

    const result = await chat.sendMessage({ message })
    const text = result.text

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', ...cors },
      body: JSON.stringify({ text }),
    }
  } catch (err: any) {
    return {
      statusCode: 500,
      headers: cors,
      body: `Error: ${err?.message || 'Unknown error'}`,
    }
  }
}

