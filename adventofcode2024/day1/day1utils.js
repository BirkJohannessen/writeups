import { mapNumber } from '../utils.js';

function parseLeft(input) {
    return input.split(/\r?\n/g).map(line => line.split('   ')[0]);
}

function parseRight(input) {
    return input.split(/\r?\n/g).map(line => line.split('   ')[1]);
}

function sumListDistances(a, b) {
    let result = 0;
    for (let i = 0 ; i < a.length - 1 ; i++) {
        result += Math.abs(a[i] - b[i]);
    }
    return result;
}

export function solve(input) {
    const a = parseLeft(input).map(e => mapNumber(e)).sort();
    const b = parseRight(input).map(e => mapNumber(e)).sort();
    return sumListDistances(a, b);
}
