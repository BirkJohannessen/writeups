import { eachElemApplies, isElemIncreasingBounded } from '../day2/day2utils.js'
import { mapNumber, deepCopy } from '../utils.js'

function parseGames(input) {
    return input.split('\n\n');
}

function parseBtnATuple(game) {
    return game.split(/\n/g)[0].match(/\d+/g).map(mapNumber);
}

function parseBtnBTuple(game) {
    return game.split(/\n/g)[1].match(/\d+/g).map(mapNumber);
}

function parsePrizeTuple(game) {
    return game.split(/\n/g)[2].match(/\d+/g).map(mapNumber);
}

function minTokensBonus([tupleA, _a], [tupleB, _], prizeTuple) {
    const [xTotal, yTotal] = [prizeTuple[0] + 10000000000000, prizeTuple[1] + 10000000000000];
    for (let i = 0 ; i < 100 ; i++) {
        const [accX, accY] = [tupleB[0] * i, tupleB[1] * i];
        for (let j = 0 ; j < 100 ; j++) {
            const [accExpX, accExpY] = [tupleA[0] * j, tupleA[1] * j];
            const resultX = xTotal - accX - accExpX;
            const resultY = yTotal - accY - accExpY;
            if (resultX < 0 || resultY < 0) {
                break;
            } else if (resultY === 0 && resultX === 0) {
                return [j, i];
            }
        }
    }
    return null;
}

function minTokens([tupleA, _a], [tupleB, _], prizeTuple) {
    const [xTotal, yTotal] = prizeTuple;
    for (let i = 0 ; i < 100 ; i++) {
        const [accX, accY] = [tupleB[0] * i, tupleB[1] * i];
        for (let j = 0 ; j < 100 ; j++) {
            const [accExpX, accExpY] = [tupleA[0] * j, tupleA[1] * j];
            const resultX = xTotal - accX - accExpX;
            const resultY = yTotal - accY - accExpY;
            if (resultX < 0 || resultY < 0) {
                break;
            } else if (resultY === 0 && resultX === 0) {
                return [j, i];
            }
        }
    }
    return null;
}

function upperTokenCalc(i, acc, modValueExpensive, modValueCheap) {
    if (i === 0) return null;
    const res = lowerTokenCalc(100, acc, modValueExpensive);
    if (res != null) return [i, res];
    return upperTokenCalc(--i, acc + modValueCheap, modValueExpensive, modValueCheap);

}


function lowerTokenCalc(i, acc, modValue) {
    if (i === 0) return null;
    if (acc % (modValue * i) === 0) return i;
    return tokenCalc(--i, acc, modValue);
}

export function solve(input) {
    return parseGames(input)
        .map(game => minTokens([parseBtnATuple(game), 3],[parseBtnBTuple(game), 1], parsePrizeTuple(game)))
        .filter(o => o !== null)
        .map(([a, b]) => a * 3 + b * 1)
        .reduce((acc, val) => acc += val, 0);
}

export function bonus(input) {
    return parseGames(input)
        .map(game => minTokensBonus([parseBtnATuple(game), 3],[parseBtnBTuple(game), 1], parsePrizeTuple(game)))
        .filter(o => o !== null)
        .map(([a, b]) => a * 3 + b * 1)
        .reduce((acc, val) => acc += val, 0);
}
