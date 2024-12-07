import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { resources } from '/lib/resources';

// Load the Gemini API key from environment variables
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

export async function POST(req) {
  try {
    // Parse and validate the incoming request
    const { query, subject } = await req.json();

    if (!query || typeof query !== 'string') {
      return NextResponse.json(
        { message: 'Invalid or missing "query" field' },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== 'string') {
      return NextResponse.json(
        { message: 'Invalid or missing "subject" field' },
        { status: 400 }
      );
    }

    const subjectData = resources[subject];
    if (!subjectData) {
      return NextResponse.json(
        { message: `Subject "${subject}" not found` },
        { status: 404 }
      );
    }

    const subjectDescription = subjectData.description || '';
    const context = `Explain the topic "${query}" in the subject "${subjectDescription}". Provide a list of relevant study materials.`;

    // Generate content using GoogleGenerativeAI
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const result = await model.generateContent(context);

    if (!result || !result.response?.text) {
      throw new Error('No response from Gemini API');
    }

    const explanation = result.response.text.split('\n')[0];
    const recommendations = subjectData.topics?.[query] || [];

    return NextResponse.json(
      { explanation, recommendations },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error during API request:', error);

    // Handle different error scenarios
    if (error.response) {
      // Errors from the Gemini API
      return NextResponse.json(
        {
          message: `Gemini API error: ${error.response.data?.error || 'Unknown error'}`,
        },
        { status: error.response.status || 500 }
      );
    }

    // Other errors (e.g., coding issues, network errors)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
