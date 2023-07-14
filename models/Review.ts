import mongoose from "mongoose";

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

export default Review;
