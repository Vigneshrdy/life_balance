// app/api/chatbot/route.js
import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Load the Gemini API key from environment variables
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

export async function POST(req) {
  const { message, history } = await req.json();

  try {
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Combine the history and the new message
    const context = history.map(msg => msg.text).join('\n') + '\n' + message;

    const result = await model.generateContent(context);
    const botReply = result.response.text();

    return NextResponse.json({ reply: botReply });
  } catch (error) {
    console.error('Error during Gemini API request:', error.response ? error.response.data : error.message);
    return NextResponse.json({ reply: 'Sorry, something went wrong.' }, { status: 500 });
  }
}