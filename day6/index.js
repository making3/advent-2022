const input = getInputArray(false);

for (const line of input) {
    const s = [];
    let answer = -1;
    for (let i = 0; i < line.length; i++) {
        const index = s.indexOf(line[i]);
        if (index > -1) {
            s.splice(0, index + 1);
        }

        s.push(line[i]);

        if (s.length === 4) {
            answer = i + 1;
            break;
        }
    }

    logAnswer(FIRST, answer);
}

for (const line of input) {
    const s = [];
    let answer = -1;
    for (let i = 0; i < line.length; i++) {
        const index = s.indexOf(line[i]);
        if (index > -1) {
            s.splice(0, index + 1);
        }

        s.push(line[i]);

        if (s.length === 14) {
            answer = i + 1;
            break;
        }
    }

    logAnswer(SECOND, answer);
}
