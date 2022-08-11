const router = require("express").Router();
const DiaryEntry = require("../models/DiaryEntry");

//CREATE diary entry

router.post("/", async (req, res) => { 
    const newDiaryEntry = new DiaryEntry(req.body);
    try {
      const savedEntry = await newDiaryEntry.save();
      res.status(201).json(savedEntry);
    } catch (err) {
      res.status(500).json(err);
    }
});

//UPDATE diary entry

router.put("/:id", async (req, res) => {
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

//DELETE diary entry

router.delete("/:id", async (req, res) => { 
    try {
      await DiaryEntry.findByIdAndDelete(req.params.id);
      res.status(200).json("The Entry has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
});

//GET diary entry

router.get("/find/:id", async (req, res) => {
  try {
    const Entry = await DiaryEntry.findById(req.params.id);
    res.status(200).json(Entry);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL diary entries

router.get("/", async (req, res) => {
    try {
      const Entries = await DiaryEntry.find();
      res.status(200).json(Entries.reverse());
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;