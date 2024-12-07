// app/api/update-courses/route.js
import { NextResponse } from 'next/server';
import connectToDatabase from '/lib/mongodb';
import Student from '/models/Student';
import { getAuth } from '@clerk/nextjs/server';

export async function POST(req) {
  const { userId } = getAuth(req);
  const { courses } = await req.json();

  try {
    await connectToDatabase();

    const student = await Student.findOne({ userId });
    if (!student) {
      return NextResponse.json({ message: 'Student not found' }, { status: 404 });
    }

    student.courses = courses;
    await student.save();

    return NextResponse.json({ message: 'Courses updated' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}