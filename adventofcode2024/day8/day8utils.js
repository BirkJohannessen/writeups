function parseMap(input) {
    return input.split('\n')
        .slice(0, -1)
        .map(line => line.split(''));
}

function combinations(tuples) {
    return tuples.reduce((acc, tupleA, idx) => 
        acc.concat(tuples.slice(idx + 1).map(tupleB => [tupleA, tupleB]))
    , []);
}

function mapAntennaTuples(antenna, map) {
    return map.reduce((tuples, row, idy) => {
        row.forEach((tile, idx) => tile === antenna ? tuples.push([idx, idy]) : null);
        return tuples;
    }, []);
}

function isWithinBounds(x, y, map) {
    return x < map.length && y < map[0].length;
}

function getAntiNodeTuples(tupleA, tupleB, map) {
    console.log('i', tupleA)
    console.log('i', tupleB)
    const [ax, ay] = tupleA;
    const [bx, by] = tupleB;
    const [dx, dy] = [bx - ax, by - ay];
    // const tupleV = [Math.abs(bx - ax), Math.abs(by - ay)];
    // const [vx, vy] = tupleV;
    console.log('d',dx, dy)
    const slope = dx === dy || dx === -dy;
    const [mx, my] = [ax + (dx / 2), ay + (dy / 2)];
    console.log('m', mx, my)
    console.log(my, dy)
    // console.log(mx, dx)
    const antiTupleA = [Math.ceil(my + dy), Math.ceil(mx + dx)];
    const antiTupleB = [Math.floor(my - dy), Math.floor(mx - dx)];
    // const antiTupleB = [99,99];
    const [axA, ayA] = antiTupleA;
    const [axB, ayB] = antiTupleB;
    const result = [];
    console.log('a', antiTupleA);
    console.log('a', antiTupleB);
    if (isWithinBounds(axA, ayA, map)) result.push(antiTupleA);
    if (isWithinBounds(axB, ayB, map)) result.push(antiTupleB);
    return result; // => [] eller [tuple1] eller [tuple1,tuple2]
}

function drawAntiNodes(antiNodes, map) {
    antiNodes.forEach(([x, y]) => map[x][y] = '#');
    return map;
}

export function solve(input) {
    const map = [...parseMap(input).reduce((rowAcc, row) => {
        row.forEach(tile => rowAcc.add(tile));
        return rowAcc;
    }, new Set())]
    .filter(antenna => antenna !== '.') // definition of absent antenna
    .map(antenna => mapAntennaTuples(antenna, parseMap(input))) // mapAntennaTuples('a', map) => [[x,y],[x2,y2],[x3,y3]]
    .filter(tuples => tuples.length > 1) // single point makes no line
    .map(combinations)
    .flat()
    .map(([tupleA, tupbleB]) => getAntiNodeTuples(tupleA, tupbleB, parseMap(input))) // getAntiNodes(tupleA1, tupleA2) => [] eller [tuple1] eller [tuple1,tuple2]
    .reduce((map, antiNodes) => drawAntiNodes(antiNodes, map), parseMap(input)) // drawAntiNodes(map, [tuple1,tuple2]) => map
    drawMap(map)
    
    .reduce((total, row) =>  // count all unique antinodes
        total += row.reduce((acc, tile) => acc += tile === '#' ? 1 : 0, 0)
    , 0)
    return map;
}

function drawMap(map) {
    console.log(map.map(row => row.join('')).join('\n'));
}
