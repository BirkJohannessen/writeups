function parseLists(input, minLength) {
    let rows = parseRows(input);
    const cols = parseCols(rows);
    return rows.concat(cols).concat(parseDiagonals(rows, cols, minLength));
}

function parseRows(input) {
    return input.split(/\r?\n/g).map(line => line.split('')).slice(0, -1);
}

function parseCols(rows) {
    return [...Array(rows[0].length).keys()].map(colKey => [...Array(rows.length).keys()].map(rowKey => rows[rowKey][colKey]));
}

function range(elems) {
    return [...Array(elems).keys()];
}

function parseDiagonals(rows, _, _2) {
    const magicActualPartOne = range(rows.length - 1).map(i => range(i + 1))
        .concat([range(rows.length)])
        .map(o => o.reverse());
    const magicActualPartTwo = range(rows.length - 1).map(i => range(i + 1).map(r => rows.length - 1 - r)).map(o => o.reverse()).reverse();
    const res = magicActualPartOne.map(diagonal => range(diagonal.length).map(idx => rows[idx][diagonal[idx]]))
    const res2 = magicActualPartTwo.map(diagonal => range(diagonal.length).map(i => rows.length - 1 - i).map((i, idx) => rows[i][diagonal[idx]]))

    // [[0],[0,1],[0,1,2],[1, 2],[2]].map(o => o.reverse())
    // const magic2Actual = magicActual.reverse().map(o => o.reverse());
    const magic2ActualPartOne = magicActualPartOne.map(o => o.map(i => rows.length - 1 - i));
    const res3 = magic2ActualPartOne.map(diagonal => range(diagonal.length).map(idx => rows[idx][diagonal[idx]]))
    // console.log(res3);
    const magic2ActualPartTwo = range(rows.length - 1).map(i => range(i + 1).map(r => rows.length - 1 - r)).map(o => o.reverse()).reverse();
    const res4 = magic2ActualPartTwo.map(diagonal => range(diagonal.length).map(idx => rows[diagonal[idx]][idx]))
    // console.log(magic2ActualPartTwo);
    // console.log(res4);
    return res.concat(res2).concat(res3).concat(res4);

    // [[0],[0,1],[0,1,2],[1,2],[2]].map(o => o.reverse())
    // magic.reverse().map(o => o.reverse());
}

function countOccurances(list, word) {
    const reverseWord = word.split('').reverse().join('');

    let wordReverseIdx = 0;
    let wordIdx = 0;

    let count = 0;
    for (let i = 0 ; i < list.length ; i++) {
        if (word[wordIdx] === list[i]) {
            wordIdx += 1;
            if (wordIdx === word.length) {
                count += 1;
                wordIdx = 0;
            }
        } else {
            wordIdx = 0;
            if (word[wordIdx] === list[i]) {
                wordIdx += 1;
            }
        }
        if (reverseWord[wordReverseIdx] === list[i]) {
            wordReverseIdx += 1;
            if (wordReverseIdx === word.length) {
                count += 1;
                wordReverseIdx = 0;
            }
        } else {
            wordReverseIdx = 0;
            if (reverseWord[wordReverseIdx] === list[i]) {
                wordReverseIdx += 1;
            }
        }
    }
    return count;
}

export function solve(input) {
    const word = 'XMAS';
    return parseLists(input, word.length)
        .map(list => countOccurances(list, word))
        .reduce((a, b) => a += b, 0);
}
