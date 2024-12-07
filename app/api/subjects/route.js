// app/api/subjects/route.js
import { NextResponse } from 'next/server';
import connectToDatabase from '/lib/mongodb';
import Student from '/models/Student';
import { getAuth } from '@clerk/nextjs/server';

export async function GET(req) {
  const { userId } = getAuth(req);

  try {
    await connectToDatabase();

    const student = await Student.findOne({ userId });
    if (!student) {
      return NextResponse.json({ message: 'Access denied' }, { status: 403 });
    }

    const subjects = student.courses.map(course => ({
      name: course,
      resources: ['Notes', 'Recorded Lectures', 'Mock Tests', 'Previous Year Question Papers'],
    }));

    return NextResponse.json(subjects, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}