// app/api/signup/route.js
import { NextResponse } from 'next/server';
import connectToDatabase from '/lib/mongodb';
import Student from '/models/Student';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  const { username, password, courses } = await req.json();

  try {
    await connectToDatabase();

    const hashedPassword = await bcrypt.hash(password, 10);

    const student = new Student({
      username,
      password: hashedPassword,
      courses, // Add courses to the student document
    });

    await student.save();

    return NextResponse.json({ message: 'User created' }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}