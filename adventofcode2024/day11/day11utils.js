import { mapNumber, range } from '../utils.js';

function parse(input) {
    return input.split(' ')
        .map(mapNumber);
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

function calculateLength(round, stones, lookup) {
    if (round === 0) return stones.length;
    const leftovers = [];
    const nextStones = stones.reduce((acc, value) => {
        transform(value).forEach(val => {
            if (range(10).includes(val)) {
                leftovers.push(val);
            } else {
                acc.push(val)
            }
        });
        return acc;
    }, []);
    return calculateLength(--round, nextStones, lookup) + calculateLeftOvers(round, leftovers, lookup);
}

function calculateLeftOvers(round, stones, lookup) {
    if (round === 0) return stones.length;
    return stones.map(val => {
        if (!lookup.has(`${val},${round}`)) {
            lookup.set(`${val},${round}`, calculateLength(round, [val], lookup));
        }
        return lookup.get(`${val},${round}`);
    })
    .reduce((acc, val) => acc += val, 0)
}

export function solve(input) {
    return multiplyStones(25, parse(input)).length;
}

export function bonus(input) {
    return calculateLength(75, parse(input), new Map());
}
