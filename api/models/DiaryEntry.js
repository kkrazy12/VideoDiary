const mongoose = require("mongoose");

const DiarySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    date: { type: String }, 
    entry: { type: String } 
  },
  { timestamps: true }
);

module.exports = mongoose.model("DiaryEntry", DiarySchema);