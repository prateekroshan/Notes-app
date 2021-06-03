

const yargs = require('yargs');
const notes = require('./notes');
const {
  addNotes, removeNotes,listNotes,readNotes
} = require('./notes');

// notes adding command

yargs.command({
  command: 'add',
  description: 'adding a note',
  builder: {
    title: {
      describe: 'notes title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'notes body',
      demandOption: true,
      type: 'string',

    },
  },
  handler: function add(argv) {
    addNotes(argv.title, argv.body);
  },
});

// remove command
yargs.command({
  command: 'remove',
  description: 'removing the note',

  builder: {
    title: {
      describe: 'removing title',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function remove(argv) {
    removeNotes(argv.title);
  },
});

// read command
yargs.command({
  command: 'read',
  description: 'read a note',
  builder :{
    title: {
      describe: 'Reading title',
      demandOption: true,
      type: 'string',

    }
  },
  handler: function read(argv) {
    readNotes(argv.title);
  },
});

// list command
yargs.command({
  command: 'list',
  description: 'list out the notes',
  handler(){
    notes.listNotes()
  }
  ,
});

yargs.parse();

// console.log(yargs.argv);
