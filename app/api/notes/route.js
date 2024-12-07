// app/api/notes/route.js
import { NextResponse } from 'next/server';
import connectToDatabase from '/lib/mongodb';
import Note from '/models/Note';
import { getAuth } from '@clerk/nextjs/server';

export async function GET(req) {
  const { userId } = getAuth(req);

  try {
    await connectToDatabase();

    const notes = await Note.find({ uploadedBy: userId });

    return NextResponse.json(notes, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}