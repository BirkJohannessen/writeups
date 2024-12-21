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
    return x < map.length && x >= 0
        && y < map[0].length && y >= 0;
}

function getAntiNodeTuples([ax, ay], [bx, by], map) {
    return [
        [ay - (by - ay), ax - (bx - ax)],
        [by + (by - ay), bx + (bx - ax)]
    ]
    .filter(([x, y]) => isWithinBounds(x, y, map));
}

function getAntiNodeTuplesBonus(tupleA, tupleB, map) {
    return tupleMultiPos([], tupleA, tupleB, 50)
        .concat(tupleMultiNeg([], tupleA, tupleB, 50))
        .filter(([x, y]) => isWithinBounds(x, y, map));
}

function tupleMultiPos(accumilator, [ax, ay], [bx, by], jump) {
    accumilator.push([ay + ((by - ay) * jump), ax + ((bx - ax) * jump)]);
    if (jump === 0) return accumilator;
    return tupleMultiPos(accumilator, [ax, ay], [bx, by], --jump);
}

function tupleMultiNeg(accumilator, [ax, ay], [bx, by], jump) {
    accumilator.push([ay - ((by - ay) * jump), ax - ((bx - ax) * jump)]);
    if (jump === 0) return accumilator;
    return tupleMultiNeg(accumilator, [ax, ay], [bx, by], --jump);
}

function drawAntiNodes(antiNodes, map) {
    return antiNodes.reduce((mapAcc, [x, y]) => {
        mapAcc[x][y] = '#';
        return mapAcc;
    }, map);
}

export function solve(input) {
    return [...parseMap(input).reduce((rowAcc, row) => {
        row.forEach(tile => rowAcc.add(tile));
        return rowAcc;
    }, new Set())]
    .filter(antenna => antenna !== '.') // absent antenna
    .map(antenna => mapAntennaTuples(antenna, parseMap(input))) // mapAntennaTuples(antennasymbol, map) => [tuple, tuple1, tuple2]
    .filter(tuples => tuples.length > 1) // single point makes no antinodes 
    .map(combinations).flat() // flat() since we dont need antenna context from now on.
    .map(([tupleA, tupbleB]) => getAntiNodeTuples(tupleA, tupbleB, parseMap(input))) // getAntiNodes(tupleA1, tupleA2) => [] eller [tuple1] eller [tuple1,tuple2]
    .reduce((map, antiNodes) => drawAntiNodes(antiNodes, map), parseMap(input)) // drawAntiNodes(map, [tuple1,tuple2]) => map
    .reduce((total, row) =>  // count all unique antinodes noted # on the map
        total += row.reduce((acc, tile) => acc += tile === '#' ? 1 : 0, 0)
    , 0);
}

export function bonus(input) {
    return [...parseMap(input).reduce((rowAcc, row) => {
        row.forEach(tile => rowAcc.add(tile));
        return rowAcc;
    }, new Set())]
    .filter(antenna => antenna !== '.') // absent antenna
    .map(antenna => mapAntennaTuples(antenna, parseMap(input))) // mapAntennaTuples(antennasymbol, map) => [tuple, tuple1, tuple2]
    .filter(tuples => tuples.length > 1) // single point makes no antinodes 
    .map(combinations).flat() // flat() since we dont need antenna context from now on.
    .map(([tupleA, tupbleB]) => getAntiNodeTuplesBonus(tupleA, tupbleB, parseMap(input))) // getAntiNodes(tupleA1, tupleA2) => [...tuple]
    .reduce((map, antiNodes) => drawAntiNodes(antiNodes, map), parseMap(input)) // drawAntiNodes(map, [tuple1,tuple2]) => map
    .reduce((total, row) =>  // count all unique antinodes noted # on the map
        total += row.reduce((acc, tile) => acc += tile === '#' ? 1 : 0, 0)
    , 0);
}
