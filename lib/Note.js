const fs = require("fs");
const nodemon = require("nodemon");
const path = require("path");
const uuid = require("uuid");

class Note {
  createNote(body, notes) {
    const note = body;
    note.id = uuid.v4();
    notes.push(note);
    fs.writeFileSync(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify({ notes }, null, 2)
    );
    return note;
  }

  validateNewNote(note) {
    if (!note.title || typeof note.title !== "string") {
      return false;
    }
    if (!note.text || typeof note.text !== "string") {
      return false;
    }
    return true;
  }
}

module.exports = Note;
