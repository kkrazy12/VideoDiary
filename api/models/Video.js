const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    url: { type: String, required: true, unique: true},
    desc: { type: String }, // video description
    img: { type: String }, // image in the banenr
    imgTitle: { type: String }, // image used for the movie title on banner
    imgSm: { type: String }, // video slider thumbmails 
    trailer: { type: String }, // trailer on hover
    video: { type: String }, // the video itself
    year: { type: String } // video release year 
  },
  { timestamps: true }
);

module.exports = mongoose.model("Video", VideoSchema);