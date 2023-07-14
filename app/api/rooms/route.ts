// pages/api/reviews.js
import connectToDatabase from "@/app/utils/db";
import Room from "@/models/Room";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Connect to MongoDB
    await connectToDatabase();

    // Get all rooms
    const rooms = await Room.find();
    // console.log("ROOMS", rooms);
    return NextResponse.json({ rooms });
  } catch (error) {
    console.error(error);
    NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}
