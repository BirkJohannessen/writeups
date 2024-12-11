import { mapNumber } from '../utils.js';

function parse(input) {
    return input.split('\n')
        .slice(0, -1)
        .map(row => row.split('').map(mapNumber));
}

function isWithinValueBounds(a, b, [min, max]) {
    if (b === '.') return false;
    return a - b > min && a - b < max;
}

function isWithinMapBounds(x, y, map) {
    return x < map.length && x >= 0
        && y < map[0].length && y >= 0;
}

/*
function trailscore([a,b], boundedTuple, previousValue, map) {
    if (!isWithinMapBounds(a, b, map)) return 0;
    const currentValue = map[a][b];
    if (!isWithinValueBounds(currentValue, previousValue, boundedTuple)) return 0;
    if (currentValue === 9) return 1;
    return trailscore([a, b - 1], boundedTuple, currentValue, map)
        + trailscore([a, b + 1], boundedTuple, currentValue, map)
        + trailscore([a + 1, b], boundedTuple, currentValue, map)
        + trailscore([a - 1, b], boundedTuple, currentValue, map);
}
*/

function trailTops([a,b], boundedTuple, previousValue, map, visitedTuples) {
    if (!isWithinMapBounds(a, b, map)) return [];
    if (visitedTuples.find(([tupA, tupB]) => tupA === a && tupB === b)) return [];
    const currentValue = map[a][b];
    if (!isWithinValueBounds(currentValue, previousValue, boundedTuple)) return [];
    if (currentValue === 9) return [[a,b]];
    return trailTops([a, b - 1], boundedTuple, currentValue, map, [...visitedTuples, [a,b]])
        .concat(trailTops([a, b + 1], boundedTuple, currentValue, map, [...visitedTuples, [a,b]]))
        .concat(trailTops([a + 1, b], boundedTuple, currentValue, map, [...visitedTuples, [a,b]]))
        .concat(trailTops([a - 1, b], boundedTuple, currentValue, map, [...visitedTuples, [a,b]]));
}

function uniqueTrailTops(tops) {
    const map = {}
    tops.forEach(([a,b]) => {
        map[`${a},${b}`] = [a,b];
    });
    return Object.values(map);
}

export function solve(input) {
    const map = parse(input);
    return map
        .map((row, idx) => row.map(((topography, jdx) => topography === 0 ? [idx, jdx] : null)))
        .map(row => row.filter(o => o))
        .reduce((acc, row) => acc.concat(row), [])
        .map(tuple => trailTops(tuple, [0,2], -1, map, []))
        .map(uniqueTrailTops)
        .map(o => o.length)
        .reduce((acc, val) => acc += val, 0)
}
