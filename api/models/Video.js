const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    url: { type: String, required: true, unique: true},
    desc: { type: String }, // video description
    img: { type: String }, // image in the banenr
    year: { type: String } // video release year 
  },
  { timestamps: true }
);

module.exports = mongoose.model("Video", VideoSchema);