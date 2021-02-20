const Note = require("../lib/Note");

const { notes } = require("../db/db.json");

jest.mock("fs");

test("creates a note object", () => {
  const note = new Note().createNote(
    { title: "Test-title", text: "Test-text" },
    notes
  );

  expect(note.title).toBe("Test-title");
  expect(note.text).toBe("Test-text");
  // There are six falsy values: false, 0, '', null, undefined, and NaN.
  // Everything else is truthy.
  expect(note.id).toBeTruthy();
});

test ("validates a note object", ()=>{
    const newNote = new Note();
    const validNoteObj = {
        title: 'Unit test note title',
        text: "Unit test note body",
      };
      const invalidNoteObj = {
        title: null,
        text: null,
      };
    
      expect(newNote.validateNewNote(validNoteObj)).toBe(true);
      expect(newNote.validateNewNote(invalidNoteObj)).toBe(false);
})
