const fs = require("fs");
const path = require("path");

// Finds the note by the id
function findById(id, notes) {
  const result = notes.filter((note) => note.id === id)[0];
  return result;
}
// Creates a new Note using fs without deleting the other notes
function createNewNote(body, notes) {
  const note = body;
  notes.push(note);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes }, null, 2)
  );
  return note;
}
// Exports the two functions created above
module.exports = { findById, createNewNote };
