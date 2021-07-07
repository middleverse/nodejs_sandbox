const fs = require("fs");
const chalk = require("chalk");

// Print all notes
const getNotes = () => {
  const notes = loadNotes();

  // print length
  console.log(chalk.blue.inverse(notes.length, "Note(s)\n"));
  console.log(notes);
};

// Add a note
const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNotes = notes.filter((note) => {
    return note.title === title && note.body === body;
  });

  // if current add request isn't a duplicate, add note
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
  }
};

const removeNote = (title) => {
  const notes = loadNotes();

  console.log(chalk.red("Removing:", title, "\n"));

  const notesToKeep = notes.filter((note) => {
    return note.title !== title;
  });

  if (notesToKeep.length < notes.length) {
    saveNotes(notesToKeep);
    console.log(chalk.green.inverse("Success: Note removed\n"));
  } else {
    console.log(chalk.red.inverse("Error: Note not found/removed\n"));
  }

  console.log(notesToKeep);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return (parsedData = JSON.parse(dataJSON));
  } catch (err) {
    // console.log(err);
    return [];
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

module.exports = {
  getNotes,
  addNote,
  removeNote,
};
