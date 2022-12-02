const readInput = require('./readInput');

global.FIRST = 'First';
global.SECOND = 'Second';
global.getInput = readInput.readInput;
global.getInputArray = readInput.readInputArray;

const puzzleFilter = process.argv.length > 3 ? process.argv[3] : null;

global.logAnswer = (puzzle, answer) => {
    if (puzzleFilter) {
        if (puzzle.toLowerCase() === puzzleFilter.toLowerCase()) {
            console.log(`${puzzle}: ${answer}`)
        }
    } else {
        console.log(`${puzzle}: ${answer}`)
    }
}

const day = process.argv[2];
if (!day) {
    throw new Error('Please specify a day');
}

require(`./${day}`);
