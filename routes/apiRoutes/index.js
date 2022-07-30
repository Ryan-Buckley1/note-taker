const router = require("express").Router();
const { findById, createNewNote } = require("../../utils/notesFunctions");

const { notes } = require("../../db/db.json");

router.get("/notes", (req, res) => {
  let results = notes;
  res.json(results);
});

router.get("/notes/:id", (req, res) => {
  let result = findById(req.params.id, notes);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

router.post("/notes", (req, res) => {
  req.body.id = notes.length.toString();
  const note = createNewNote(req.body, notes);
  res.json(note);
});

router.put("/notes/:id", (req, res) => {});

router.delete("/notes/:id", (req, res) => {
  notes.splice(req.params.index, 1);
  res.end();
});

module.exports = router;
