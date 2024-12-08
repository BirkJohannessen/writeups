import { mapNumber, deepCopy } from '../utils.js';

function parseEquation(input) {
    return input.split('\n')
        .slice(0, -1)
        .map(o => o.split(': '))
        .map(([a, b]) => [mapNumber(a), b.split(' ').map(mapNumber)]);
}

function isValidEq(result, accumilator, elems) {
    if (!elems.length) {
        return  accumilator === result;
    }
    const cpy = deepCopy(elems);
    const val = cpy.shift();
    return isValidEq(result, accumilator + val, cpy) || isValidEq(result, accumilator * val, cpy);
}

export function solve(input) {
    return  parseEquation(input)
        .filter(([res, input]) => isValidEq(res, 0, input))
        .reduce((acc, [res, _]) => acc += res, 0)
}

