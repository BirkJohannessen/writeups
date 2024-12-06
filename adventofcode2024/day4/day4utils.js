function parseLists(input, minLength) {
    const rows = parseRows(input);
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
    rows=[['a','b','c']
         ,['d','f','g']
         ,['h','i','j']]

    const magicActual = range(rows.length - 1).map(i => range(i + 1))
        .concat([range(rows.length)])
        .concat(range(rows.length - 1).map(i => range(i + 1).map(r => rows.length - 1 - r)).map(o => o.reverse()).reverse())
        .map(o => o.reverse());
    console.log(magicActual);

    // [[0],[0,1],[0,1,2],[1, 2],[2]].map(o => o.reverse())
    // const magic2Actual = magicActual.reverse().map(o => o.reverse());
    const res = magicActual.map(diagonal => range(diagonal.length).map(idx => rows[idx][diagonal[idx]]))
    console.log(res);

    return [];

    // [[0],[0,1],[0,1,2],[1,2],[2]].map(o => o.reverse())
    // magic.reverse().map(o => o.reverse());
}

function countOccurances(list, word) {
    const reverseWord = word.split('').reverse().join('');

    let wordReverseIdx = 0;
    let wordIdx = 0;

    let count = 0;
    for (let i = 0 ; i < list.length - 1 ; i++) {
        if (word[wordIdx] === list[i]) {
            wordIdx++;
            if (wordIdx === word.length - 1) {
                count++;
                wordIdx = 0;
            }
        } else {
            wordIdx = 0;
            if (word[wordIdx] === list[i]) {
                wordIdx++;
            }
        }
        if (reverseWord[wordReverseIdx] === list[i]) {
            wordReverseIdx++;
            if (wordReverseIdx === word.length - 1) {
                count++;
                wordReverseIdx = 0;
            }
        } else {
            wordReverseIdx = 0;
            if (reverseWord[wordReverseIdx] === list[i]) {
                wordReverseIdx++;
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
