// app/api/notes/create/route.js
import { NextResponse } from 'next/server';
import connectToDatabase from '/lib/mongodb';
import Note from '/models/Note';
import { getAuth } from '@clerk/nextjs/server';

export async function POST(req) {
  const { userId } = getAuth(req);
  const { title, content, course, fileUrl } = await req.json();

  try {
    await connectToDatabase();

    const note = new Note({
      title,
      content,
      course,
      uploadedBy: userId,
      fileUrl,
    });

    await note.save();

    return NextResponse.json({ message: 'Note created' }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}