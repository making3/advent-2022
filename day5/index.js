const input = getInputArray(false);

let readingStacks = true;
let stacks = [];
for (let i = 0; i < 9; i++) {
    stacks.push([]);
}

function readStackContent(line) {
    let stackIndex = 0;
    for (let i = 1; i < line.length; i += 4) {
        if (line[i] !== ' ') {
            stacks[stackIndex].splice(0, 0, line[i]);
        }
        stackIndex++;
    }
}

function processInstruction(line) {
    const [amountPart, rest] = line.split('from');

    const [, amount] = amountPart.split(' ').map((a) => Number(a));
    const [from, to] = rest.split('to').map((t) => Number(t.trim()) - 1);

    for (let i = 0; i < amount; i++) {
        const [r] = stacks[from].splice(-1, 1);
        if (r) {
            stacks[to].push(r);
        }
    }
}

for (const line of input) {
    if ((!line || !line.includes('[')) && readingStacks) {
        readingStacks = false;
        continue;
    }

    if (readingStacks) {
        readStackContent(line);
    } else if (line) {
        processInstruction(line);
    }
}

let tops = stacks.map((s) => s[s.length - 1]).join('');
logAnswer(FIRST, tops);

readingStacks = true;
stacks = [];
for (let i = 0; i < 9; i++) {
    stacks.push([]);
}

function processInstructionPart2(line) {
    const [amountPart, rest] = line.split('from');

    const [, amount] = amountPart.split(' ').map((a) => Number(a));
    const [from, to] = rest.split('to').map((t) => Number(t.trim()) - 1);

    const r = stacks[from].splice(stacks[from].length - amount, amount);
    if (r) {
        stacks[to].push(...r);
    }
}

for (const line of input) {
    if ((!line || !line.includes('[')) && readingStacks) {
        readingStacks = false;
        continue;
    }

    if (readingStacks) {
        readStackContent(line);
    } else if (line) {
        processInstructionPart2(line);
    }
}

tops = stacks.map((s) => s[s.length - 1]).join('');

logAnswer(SECOND, tops);
