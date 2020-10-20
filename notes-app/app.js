const getNotes = require('./notes.js');
const chalk = require('chalk');

const msg = getNotes();
console.log(msg);

console.log(chalk.bold.green.inverse('Success!'));