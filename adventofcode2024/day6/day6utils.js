function parseMap(input) {
    return input.split('\n')
        .slice(0, -1)
        .map(line => line.split('').map(mapSymbols));
}

function mapSymbols(symbol) {
    if (symbol === '.') return 0;
    if (symbol === '#') return 2;
    if (symbol === '^') return 3;
    // X == 2
    // > == 4
    // v == 5
    // < == 6
}

function cursorOnRow(row) {
    return row.findIndex(o => [3,4,5,6].includes(o))
}

function cursorTuple(map) {
    const idxRow = map.findIndex(row => cursorOnRow(row) > -1);
    const idxCol = cursorOnRow(map[idxRow]);
    return [idxRow, idxCol];
}

function north(cursorRow, cursorCol, map) {
    if (map[cursorRow - 1][cursorCol] === 2) {
        map[cursorRow][cursorCol] = rotate(map[cursorRow][cursorCol]);
    } else {
        map[cursorRow - 1][cursorCol] = map[cursorRow][cursorCol];
        map[cursorRow][cursorCol] = 1
    }
}

function south(cursorRow, cursorCol, map) {
    if (map[cursorRow + 1][cursorCol] === 2) {
        map[cursorRow][cursorCol] = rotate(map[cursorRow][cursorCol]);
    } else {
        map[cursorRow + 1][cursorCol] = map[cursorRow][cursorCol];
        map[cursorRow][cursorCol] = 1
    }
}

function west(cursorRow, cursorCol, map) {
    if (map[cursorRow][cursorCol - 1] === 2) {
        map[cursorRow][cursorCol] = rotate(map[cursorRow][cursorCol]);
    } else {
        map[cursorRow][cursorCol - 1] = map[cursorRow][cursorCol];
        map[cursorRow][cursorCol] = 1
    }
}

function east(cursorRow, cursorCol, map) {
    if (map[cursorRow][cursorCol + 1] === 2) {
        map[cursorRow][cursorCol] = rotate(map[cursorRow][cursorCol]);
    } else {
        map[cursorRow][cursorCol + 1] = map[cursorRow][cursorCol];
        map[cursorRow][cursorCol] = 1
    }
}

function moveAlong(map) {
    drawMap(map);
    const [x, y] = cursorTuple(map);
    const cursor = map[x][y];
    try {
        if (cursor === 3) north(x, y, map);
        if (cursor === 4) east(x, y, map);
        if (cursor === 5) south(x, y, map);
        if (cursor === 6) west(x, y, map);
    } catch(err) {
        map[x][y] = 1;
        return true;
    }
    return false;
}

function resolve(map) {
    let resolved = false;
    while (!resolved) {
        resolved = moveAlong(map);
    }
    return map;
}

function rotate(val) {
    if (val === 3) return 4;
    if (val === 4) return 5;
    if (val === 5) return 6;
    if (val === 6) return 3;
    throw new Error();
}

export function solve(input) {
    return resolve(parseMap(input))
        .reduce((acc, row) => acc + row.reduce((sAcc, tile)=> sAcc + (tile === 1 ? 1 : 0), 0), 0);
}

function reverseMapSymbol(symbol) {
    if (symbol === 0) return '.';
    if (symbol === 1) return 'X';
    if (symbol === 2) return '#';
    if (symbol === 3) return '^';
    if (symbol === 4) return '>';
    if (symbol === 5) return 'v';
    if (symbol === 6) return '<';
}

function drawMap(map) {
    console.log(map.map(row => row.map(tile => reverseMapSymbol(tile)).join('')).join('\n'));
}

