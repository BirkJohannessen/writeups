import { mapNumber } from '../utils.js';

function parseLeft(input) {
    return input
        .split(/\r?\n/g)
        .map(line => line.split('   ')[0])
        .slice(0, -1)
        .map(mapNumber)
}

function parseRight(input) {
    return input
        .split(/\r?\n/g)
        .map(line => line.split('   ')[1])
        .slice(0, -1)
        .map(mapNumber)
}

export function solve(input) {
    const a = parseLeft(input).sort();
    const b = parseRight(input).sort();
    return a.reduce((acc, _, idx) => acc += Math.abs(a[idx] - b[idx]), 0);
}

export function bonus(input) {
    const a = parseLeft(input);
    const bMap = parseRight(input).reduce((acc, val) => {
        acc[val] = acc[val] ? ++acc[val] : 1;
        return acc;
    }, {});
    return a.reduce((acc, val) => acc += bMap[val] ? val * bMap[val] : 0 , 0);
}
