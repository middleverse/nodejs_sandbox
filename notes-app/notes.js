const fs = require("fs");

const getNotes = () => {
  const notes = loadNotes();

  console.log(notes);
};

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

  console.log("Removing:", title);

  const removedNotes = notes.filter((note) => {
    return note.title !== title;
  });

  saveNotes(removedNotes);

  console.log(removedNotes);
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
