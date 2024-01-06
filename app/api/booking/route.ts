import connectToDatabase from "@/app/utils/db";
import Booking from "@/models/Booking";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, arrivalDate, guests, rooms, comment } =
      await req.json();

      console.log(name, email, arrivalDate, guests, rooms, comment);

    await connectToDatabase();
    const booking = {
      name,
      email,
      arrivalDate,
      guests,
      rooms,
      comment,
    };


    // Save the booking to the database
    await Booking.create(booking);

    // return new NextResponse(JSON.stringify(booking), {
    //   status: 201,
    //   headers: { "Content-Type": "application/json" },
    // });
    
    return NextResponse.json({message:'Booking created successfully'},{status:201})

  } catch (error) {
    NextResponse.json({ message: "Error submitting booking" }, { status: 500 });
  }
}
