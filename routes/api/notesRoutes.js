const router = require("express").Router();
const { notes } = require("../../db/db.json");
const Note = require("../../lib/Note");

router.get("/notes", (req, res) => {
  let results = notes;
  res.json(results);
});

router.post("/notes", (req, res) => {
  const newNote = new Note().createNote(req.body, notes);
  res.json(newNote);
});

router.delete("/notes/:id", (req, res) => {
  const result = new Note().deleteNote(req.params.id, notes);
  res.json(result);
});

module.exports = router;
