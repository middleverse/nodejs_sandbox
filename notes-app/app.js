const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");

// customize yargs version
yargs.version("1.1.0");

// yargs.command DEFINES a new command
// lets use it to build some commands

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.removeNote(argv.title);
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read a new note",
  handler: () => {
    notes.getNotes();
  },
});

// Create List command
yargs.command({
  command: "list",
  describe: "List a new note",
  handler: () => {
    console.log("Listing a new note");
  },
});

yargs.parse(); // parses the yargs command with all the arguments
