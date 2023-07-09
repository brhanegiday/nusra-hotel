import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

const connectToDatabase = async () => {
  // Connect to MongoDB
  mongoose
    .connect(MONGODB_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("Error connecting to MongoDB:", error));
};

export default connectToDatabase;
