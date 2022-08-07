// const firebase = require("firebase");
import { firestore } from "./firebase";

const VideoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String },
    img: { type: String },
    imgTitle: { type: String },
    imgSm: { type: String },
    trailer: { type: String },
    video: { type: String },
    year: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Video", VideoSchema);