import mongoose from "mongoose";

const Quote = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter author name"],
  },
  quote: {
    type: String,
    required: [true, "Please enter quote"],
  },
});

export default mongoose.model("quotes", Quote);
