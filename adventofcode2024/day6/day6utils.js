function parseMap(input) {
    return input.split('\n')
        .slice(0, -1)
        .map(line => line.split('').map(mapSymbols));
}

function mapSymbols(symbol) {
    if (symbol === '.') return 0;
    if (symbol === '#') return 2;
    if (symbol === '^') return 3;
}

function rotate(val) {
    if (val === 3) return 4;
    if (val === 4) return 5;
    if (val === 5) return 6;
    if (val === 6) return 3;
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

function nextTuple(rowIdx, colIdx, cursor) {
    if (cursor === 3) return [rowIdx - 1, colIdx];
    if (cursor === 4) return [rowIdx, colIdx + 1];
    if (cursor === 5) return [rowIdx + 1, colIdx];
    if (cursor === 6) return [rowIdx, colIdx - 1];
}

function cursorOnRow(row) {
    return row.findIndex(o => [3,4,5,6].includes(o))
}

function cursorTuple(map) {
    const idxRow = map.findIndex(row => cursorOnRow(row) > -1);
    const idxCol = cursorOnRow(map[idxRow]);
    return [idxRow, idxCol];
}

function moveAlong(map) {
    const [x, y] = cursorTuple(map);
    const cursor = map[x][y];
    try {
        const [nextX, nextY] = nextTuple(x, y, cursor)
        if (map[nextX][nextY] === 2) {
            map[x][y] = rotate(cursor);
        } else {
            map[nextX][nextY] = cursor;
            map[x][y] = 1;
        }
    } catch(err) {
        map[x][y] = 1;
        return true;
    }
    return false;
}

function resolve(map) {
    while (!moveAlong(map));
    return map;
}

export function solve(input) {
    return resolve(parseMap(input))
        .reduce((acc, row) => acc + row.reduce((sAcc, tile)=> sAcc + (tile === 1 ? 1 : 0), 0), 0);
}

function drawMap(map) {
    console.log(map.map(row => row.map(tile => reverseMapSymbol(tile)).join('')).join('\n'));
}

