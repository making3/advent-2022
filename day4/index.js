const lines = getInputArray(false);

let completelyOverlap = 0;
let overlapTotal = 0;
for (const line of lines) {
    const [a, b] = line.split(',');
    const [as, ae] = a.split('-').map((i) => Number(i));
    const [bs, be] = b.split('-').map((i) => Number(i));

    if ((as <= bs && ae >= be) || (bs <= as && be >= ae)) {
        completelyOverlap += 1;
    }

    if (
        (as >= bs && as <= be) ||
        (ae >= bs && ae <= be) ||
        (bs >= as && bs <= ae) ||
        (be >= as && be <= ae)
    ) {
        overlapTotal += 1;
    }
}

logAnswer(FIRST, completelyOverlap);
logAnswer(SECOND, overlapTotal);
