const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes')

// customize yargs version
yargs.version('1.1.0')


// yargs.command DEFINES a new command 
// lets use it to build some commands

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: (argv) => {
        if (!argv.note) return console.log('Provide name of note to remove.') 
        console.log('Removing note', argv.note)
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a new note',
    handler: () => {
        console.log('Reading a new note')
    }
})

// Create List command
yargs.command({
    command: 'list',
    describe: 'List a new note',
    handler: () => {
        console.log('Listing a new note')
    }
})

yargs.parse() // parses the yargs command with all the arguments