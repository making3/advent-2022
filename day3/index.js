const input = getInputArray(false);

let total = 0;
for (const line of input) {
    let badchar = '';
    const middle = line.length / 2;
    const chars = new Set();

    for (let i = 0; i < line.length; i++) {
        if (i >= middle && chars.has(line[i])) {
            badchar = line[i];
            break;
        }

        if (i < middle) {
            chars.add(line[i]);
        }
    }

    const charCode = badchar.charCodeAt(0);
    if (charCode > 96) {
        total += charCode - 96;
    } else {
        total += charCode - 38;
    }
}
logAnswer(FIRST, total);

// r, Z (sample code only)
// r = 18
// Z = 52
// sum = 70

const groups = {};
total = 0;
const usages = {};

for (const line of input) {
    for (const c of line) {
        if (!(c in groups)) {
            groups[c] = new Set();
        }

        if (!(line in usages)) {
            usages[line] = new Set();
        }
        usages[line].add(groups[c]);

        groups[c].add(line);

        if (groups[c].size === 3) {
            const charCode = c.charCodeAt(0);
            if (charCode > 96) {
                total += charCode - 96;
            } else {
                total += charCode - 38;
            }

            for (const subline of groups[c]) {
                for (const group of usages[subline]) {
                    group.delete(subline);
                }
            }
            groups[c].clear();
            break;
        }
    }
}

logAnswer(SECOND, total);
