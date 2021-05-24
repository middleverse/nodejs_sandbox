const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes')

// customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: () => {
        console.log('Adding a new note')
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: () => {
        if (!yargs.argv.note) return console.log('Provide name of note to remove.') 
        console.log('Removing note', yargs.argv.note)
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

console.log(yargs.argv)