import { mapNumber } from '../utils.js';

function parse(input) {
    return input.split(' ')
        .map(mapNumber);
        //.slice(0, -1)
}

function digits(value) {
    return `${value}`.length;
}

function splitIt(value) {
    const str = `${value}`;
    const mid = (str.length / 2);
    return [parseInt(str.slice(0, mid)), parseInt(str.slice(mid))];
}

function transform(value) {
    if (value === 0) return [1]
    if (digits(value) % 2 === 1) return [value * 2024]
    if (digits(value) % 2 === 0) return splitIt(value); 
    throw new Error();
}

function multiplyStones(round, stones) {
    if (round === 0) return stones;
    const nextStones = stones.reduce((acc, value) => acc.concat(transform(value)), []);
    return multiplyStones(--round, nextStones)
}

export function solve(input) {
    return multiplyStones(75, parse(input)).length;
}
