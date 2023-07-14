import connectToDatabase from "@/app/utils/db";
import Review from "@/models/Review";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    // Connect to MongoDB
    await connectToDatabase();

    // Get all reviews
    const reviews = await Review.find();
    return NextResponse.json({ reviews }, { status: 200 });
  } catch (error) {
    console.error(error);
    NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}
