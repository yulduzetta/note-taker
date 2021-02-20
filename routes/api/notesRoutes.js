const router = require("express").Router();
const { notes } = require("../../db/db.json");
const Note = require("../../lib/Note");
let note;

router.get("/notes", (req, res) => {
  let results = notes;
  // sends data back to client
  res.json(results);
});

router.post("/notes", (req, res) => {
  const newNote = new Note();

  // req.body is where our incoming content will be
  if (!newNote.validateNewNote(req.body)) {
    // Anything in the 400 range means that it's a user error
    // and not a server error
    console.log(req.body);
    res.status(400).send("The new note is not properly formatted.");
    return;
  } else {
    // add a new note to "db"
    newNote.createNote(req.body, notes);
    res.json(newNote);
  }
  // sends data back to client
});

module.exports = router;
