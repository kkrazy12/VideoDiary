const router = require("express").Router();
const DiaryEntry = require("../models/DiaryEntry");

//CREATE - Working

router.post("/", async (req, res) => { //removed verify from inbetween / and async
    const newDiaryEntry = new DiaryEntry(req.body);
    try {
      const savedEntry = await newDiaryEntry.save();
      res.status(201).json(savedEntry);
    } catch (err) {
      res.status(500).json(err);
    }
});

//UPDATE specific movie

router.put("/:id", async (req, res) => {//removed verify from inbetween / and async
    try {
      const updatedEntry = await DiaryEntry.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedEntry);
    } catch (err) {
      res.status(500).json(err);
    }
});

//DELETE specific movie

router.delete("/:id", async (req, res) => { //removed verify from inbetween / and async
    try {
      await DiaryEntry.findByIdAndDelete(req.params.id);
      res.status(200).json("The Entry has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
});

//GET specific movie

router.get("/find/:id", async (req, res) => {//removed verify from inbetween / and async
  try {
    const Entry = await DiaryEntry.findById(req.params.id);
    res.status(200).json(Entry);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL - working

router.get("/", async (req, res) => {//removed verify from inbetween / and async
    try {
      const Entries = await DiaryEntry.find();
      res.status(200).json(Entries.reverse());
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;