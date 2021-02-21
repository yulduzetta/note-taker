const fs = require("fs");
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

  // deleteNote(id, notes) {
  //   notes = notes.filter((note) => note.id !== id);
  //   fs.writeFileSync(
  //     path.join(__dirname, "../db/db.json"),
  //     JSON.stringify({ notes }, null, 2)
  //   );
  //   return notes;
  // }

  deleteNote(id, notes) {
    let noteToBeDeleted = notes.find((note) => note.id === id);
    notes.splice(notes.indexOf(noteToBeDeleted), 1);

    fs.writeFile(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify({ notes }, null, 2),
      (err) => {
        if (err) throw err;
      }
    );
    return notes;
  }
}

module.exports = Note;
