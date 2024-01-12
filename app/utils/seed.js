const mongoose = require("mongoose");
// import mongoose from "mongoose";
const fs = require("fs");
const path = require("path");

// const faker = require("faker");

const roomSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  image: { type: String, required: true },
  rating: { type: Number, required: true },
  pricePerNight: { type: Number, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  houseRules: { type: [String], required: true },
  additionalPhotos: { type: [String], required: true },
  services: { type: [String], required: true },
});

const reviewSchema = new mongoose.Schema({
  roomId: {
    type: Number,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);
const Room = mongoose.models.Room || mongoose.model("Room", roomSchema);

async function seed() {
  // REPLACE THE MONGODB_URI VALUE WITH ACTUAL ENV VALUE
  await mongoose.connect(`${process.env.MONGODB_URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Clear existing data from the collections, if desired
  await Room.deleteMany({});
  await Review.deleteMany({});

  const roomsData = [];
  const reviewsData = [];

  // Function to generate a random rating between 3 and 5
  const generateRating = () => {
    return Math.floor(Math.random() * (5 - 3 + 1)) + 3;
  };

  const readImageFile = (filePath) => {
    const imagePath = path.join(
      process.cwd(),
      "..",
      "..",
      "public",
      "assets",
      filePath
    );
    try {
      const imageBuffer = fs.readFileSync(imagePath);
      const base64 = imageBuffer.toString("base64");
      return base64;
    } catch (error) {
      console.error("Error reading image file:", error);
      return null;
    }
  };

  // Seed rooms
  for (let i = 1; i <= 32; i++) {
    const room = {
      id: String(i),
      title: `Standard Deluxe Room ${i}`,
      image: readImageFile(
        `/rooms/Standard Deluxe Room-${
          Math.floor(Math.random() * (11 - 1 + 1)) + 1
        }.png`
      ),
      // image: "IMAge File here", Standard Deluxe Room-1
      rating: generateRating(),
      pricePerNight: Math.floor(Math.random() * (300 - 80 + 1)) + 80,
      description:
        "The Grand Palace Hotel provides accommodations with a fitness center, free private parking, a shared lounge and a restaurant. This 5-star hotel offers an ATM and a concierge service. The property has a 24-hour front desk, airport transportation, room service and free WiFi throughout the property.",
      location:
        "The Grand Palace Hotel Guinea Conakry St, Kirkos, 5710 Addis Ababa, Ethiopia",
      houseRules: ["No smoking", "No pets", "No parties"],
      additionalPhotos: [],
      services: [
        "Free Wi-Fi",
        "Airport shuttle (free)",
        "Family rooms",
        "Non-smoking rooms",
        "Free parking",
        "Fitness center",
        "Good Breakfast",
        "Restaurant",
        "Bar",
      ],
    };
    roomsData.push(room);
  }
  await Room.insertMany(roomsData);

  // Seed reviews
  for (let i = 1; i <= 10; i++) {
    const review = {
      roomId: Math.floor(Math.random() * 32) + 1, // Randomly assign a room ID from 1 to 32
      avatar: readImageFile(`/avatar/Avatar-${i}.png`),
      name: `Lorem ipsum dolor ${i}`,
      position: `Guest dolor ${i}`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur magna urna, quis volutpat enim scelerisque et ${i}`,
      rating: generateRating(),
    };
    reviewsData.push(review);
  }
  await Review.insertMany(reviewsData);

  mongoose.connection.close();
}

seed();
