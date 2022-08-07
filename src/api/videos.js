const router = require("express").Router();
const Video = require("../models/Video");
const verify = require("../verifyToken");

//CREATE

router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newVideo = new Video(req.body);
    try {
      const savedVideo = await newVideo.save();
      res.status(201).json(savedVideo);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

//UPDATE

router.put("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
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
  } else {
    res.status(403).json("You are not allowed!");
  }
});

//DELETE

router.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Video.findByIdAndDelete(req.params.id);
      res.status(200).json("The video has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

//GET

router.get("/find/:id", verify, async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    res.status(200).json(video);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET RANDOM

router.get("/random", verify, async (req, res) => {
  const type = req.query.type;
  let video;
  try {
    if (type === "series") {
      video = await Video.aggregate([
        { $match: { isSeries: true } },
        { $sample: { size: 1 } },
      ]);
    } else {
      video = await Video.aggregate([
        { $match: { isSeries: false } },
        { $sample: { size: 1 } },
      ]);
    }
    res.status(200).json(video);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL

router.get("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const videos = await Video.find();
      res.status(200).json(videos.reverse());
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

module.exports = router;