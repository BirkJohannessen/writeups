import { mapNumber } from '../utils.js';

function parseLines(input) {
    return input.split(/\r?\n/g)
        .map(line => line.split(/ /g).map(mapNumber).filter(o => o || o <= 0))
        .slice(0, -1)
}

export function solve(input) {
    return 0;
}

export function bonus(input) {
    return 0;
}
