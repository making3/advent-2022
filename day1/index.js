const input = getInputArray();

const most = [0, 0, 0];
let current = 0;

for (let i = 0; i < input.length; i++) {
    if (input[i]) {
        current += Number(input[i]);
    } else {
        if (current > most[0]) {
            most.splice(0, 0, current);
        } else if (current > most[1]) {
            most.splice(1, 0, current);
        } else if (current > most[2]) {
            most.splice(2, 0, current);
        }

        current = 0;
    }
}

logAnswer(FIRST, most[0]);
logAnswer(SECOND, most[0] + most[1] + most[2]);
