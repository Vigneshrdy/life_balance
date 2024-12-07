// app/api/forums/[course]/route.js
import { NextResponse } from 'next/server';
import connectToDatabase from '/lib/mongodb';
import Message from '/models/Message';
import { getAuth } from '@clerk/nextjs/server';

export async function GET(req, { params }) {
  const { course } = params;
  const { userId } = getAuth(req);

  try {
    await connectToDatabase();

    const messages = await Message.find({ course }).sort({ createdAt: 1 });

    return NextResponse.json({ messages }, { status: 200 });
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req, { params }) {
  const { course } = params;
  const { userId } = getAuth(req);
  const { text } = await req.json();

  try {
    await connectToDatabase();

    const newMessage = new Message({
      text,
      user: userId,
      course,
    });

    await newMessage.save();

    return NextResponse.json({ message: 'Message sent' }, { status: 201 });
  } catch (error) {
    console.error('Error sending message:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}