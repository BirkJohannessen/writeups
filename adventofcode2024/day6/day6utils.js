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

function isWithinMapBounds(x, y, map) {
    return x < map.length && x >= 0
        && y < map[0].length && y >= 0;
}

function moveAlong(map) {
    const [x, y] = cursorTuple(map);
    const cursor = map[x][y];
    const [nextX, nextY] = nextTuple(x, y, cursor)
    if (!isWithinMapBounds(nextX, nextY, map)) {
        map[x][y] = 1;
        return true;
    }
    if (map[nextX][nextY] === 2) {
        map[x][y] = rotate(cursor);
    } else {
        map[nextX][nextY] = cursor;
        map[x][y] = 1;
    }
    return false;
}

function moveAlongThrowIfLoop(map, visited) {
    const [x, y] = cursorTuple(map);
    if (visited.has(`${x},${y},${map[x][y]}`)) {
        throw new Error();
    } else {
        visited.add(`${x},${y},${map[x][y]}`);
    }
    const cursor = map[x][y];
    const [nextX, nextY] = nextTuple(x, y, cursor)
    if (!isWithinMapBounds(nextX, nextY, map)) {
        map[x][y] = 1;
        return true;
    }
    if (map[nextX][nextY] === 2) {
        map[x][y] = rotate(cursor);
    } else {
        map[nextX][nextY] = cursor;
        map[x][y] = 1;
    }
    return false;
}

function resolve(map) {
    while (!moveAlong(map));
    return map;
}

function isLoop([x, y], map) {
    map[x][y] = 2;
    try {
        while (!moveAlongThrowIfLoop(map, new Set())) {};
    } catch(_) {
        return true;
    }
    return false;
}

export function solve(input) {
    return resolve(parseMap(input))
        .reduce((acc, row) => acc + row.reduce((sAcc, tile)=> sAcc + (tile === 1 ? 1 : 0), 0), 0);
}

function drawMap(map) {
    console.log(map.map(row => row.map(tile => reverseMapSymbol(tile)).join('')).join('\n'));
}

export function bonus(input) {
    const startMap = parseMap(input);
    const resolvedMap = resolve(parseMap(input));
    return parseMap(input)
        .map((row, rowdx) => row.map((_, coldx) => [rowdx, coldx]))
        .reduce((acc, row) => acc.concat(row.reduce((sAcc, tuple) => sAcc.concat([tuple]), [])), [])
        .filter(([x, y]) => startMap[x][y] === 0)
        .filter(([x, y]) => resolvedMap[x][y] === 1)
        .filter((tuple) => isLoop(tuple, parseMap(input)))
        .length;
}
