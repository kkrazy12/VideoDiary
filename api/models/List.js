const mongoose = require("mongoose");


const ListSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true }, //title of the video slider 
    content:{ type: Array } //where my videos will be stored 
  },
  { timestamps: true }
);

module.exports = mongoose.model("List", ListSchema);