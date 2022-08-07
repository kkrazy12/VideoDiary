// const mongoose = require("mongoose");
import { firestore } from "./firebase";

const ListSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    content:{type:Array} //where my videos will be stored 
  },
  { timestamps: true }
);

module.exports = mongoose.model("List", ListSchema);