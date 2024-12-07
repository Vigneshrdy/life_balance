// app/api/login/route.js
import { NextResponse } from 'next/server';
import connectToDatabase from '/lib/mongodb';
import Student from '/models/Student';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  const { username, password } = await req.json();

  try {
    await connectToDatabase();

    const student = await Student.findOne({ username });
    if (!student) {
      return NextResponse.json({ message: 'Invalid username or password' }, { status: 401 });
    }

    const isPasswordValid = await bcrypt.compare(password, student.password);
    if (!isPasswordValid) {
      return NextResponse.json({ message: 'Invalid username or password' }, { status: 401 });
    }

    return NextResponse.json({ message: 'Login successful' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}