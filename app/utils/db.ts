import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

const connectToDatabase = async () => {
  // Connect to MongoDB
await mongoose
    .connect(MONGODB_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("Error connecting to MongoDB:", error));
};

export default connectToDatabase;
