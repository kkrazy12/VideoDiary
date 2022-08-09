const router = require("express").Router();
const Video = require("../models/Video");

//CREATE - Working

router.post("/", async (req, res) => { //removed verify from inbetween / and async
    const newVideo = new Video(req.body);
    try {
      const savedVideo = await newVideo.save();
      res.status(201).json(savedVideo);
    } catch (err) {
      res.status(500).json(err);
    }
});

//UPDATE specific movie

router.put("/:id", async (req, res) => {//removed verify from inbetween / and async
    try {
      const updatedVideo = await Video.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedVideo);
    } catch (err) {
      res.status(500).json(err);
    }
});

//DELETE specific movie

router.delete("/:id", async (req, res) => { //removed verify from inbetween / and async
    try {
      await Video.findByIdAndDelete(req.params.id);
      res.status(200).json("The video has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
});

//GET specific movie

router.get("/find/:id", async (req, res) => {//removed verify from inbetween / and async
  try {
    const video = await Video.findById(req.params.id);
    res.status(200).json(video);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL - working

router.get("/", async (req, res) => {//removed verify from inbetween / and async
    try {
      const videos = await Video.find();
      res.status(200).json(videos.reverse());
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;