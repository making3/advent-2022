const input = getInputArray(false);

const WIN = {
    X: 'C',
    Y: 'A',
    Z: 'B',
};
const OPPOSITE_WIN = {
    A: 2,
    B: 3,
    C: 1,
};
const LOSE = {
    A: 3,
    B: 1,
    C: 2,
};
const DRAW = {
    A: 'X',
    B: 'Y',
    C: 'Z',
};
const ROUND_VALUE = {
    X: 1,
    A: 1,
    Y: 2,
    B: 2,
    Z: 3,
    C: 3,
};
const RESULT = {
    LOSE: 0,
    DRAW: 3,
    WIN: 6,
};
const NEED_TO_WIN = {
    X: RESULT.LOSE,
    Y: RESULT.DRAW,
    Z: RESULT.WIN,
};

let total = 0;
let totalSecond = 0;
for (let i = 0; i < input.length; i++) {
    const [a, b] = input[i].split(' ');

    let bonus;
    if (DRAW[a] === b) {
        bonus = RESULT.DRAW;
    } else if (WIN[b] === a) {
        bonus = RESULT.WIN;
    } else {
        bonus = RESULT.LOSE;
    }

    const round = ROUND_VALUE[b] + bonus;
    total += round;

    bonus = NEED_TO_WIN[b];
    let roundValue = 0;

    if (bonus === RESULT.WIN) {
        roundValue = OPPOSITE_WIN[a];
    } else if (bonus === RESULT.DRAW) {
        roundValue = ROUND_VALUE[a];
    } else {
        roundValue = LOSE[a];
    }

    totalSecond += roundValue + bonus;
}

logAnswer(FIRST, total);
logAnswer(SECOND, totalSecond);
