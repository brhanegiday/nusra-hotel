import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  image: { type: String },
  rating: { type: Number, required: true },
  pricePerNight: { type: Number, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  houseRules: { type: [String], required: true },
  additionalPhotos: { type: [String], required: true },
  services: { type: [String], required: true },
});

const Room = mongoose.models.Room || mongoose.model("Room", roomSchema);

export default Room;
