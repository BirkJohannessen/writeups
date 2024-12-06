import { mapNumber } from '../utils.js';

function parseLineAsArray(input) {
    return input.split(/ /g).map(mapNumber).filter(o => o || o <= 0);
}

function isReportSafe(list, minJump, maxJump) {
    if (!list || !list.length) {
        return false;
    }
    return eachElemApplies(list, minJump, maxJump, isElemDecreasingBounded)
        || eachElemApplies(list, minJump, maxJump, isElemIncreasingBounded);
}

export function isElemIncreasingBounded(a, b, minJump, maxJump) {
    return isBounded(b - a, minJump, maxJump);
}

function isElemDecreasingBounded(a, b, minJump, maxJump) {
    return isBounded(a - b, minJump, maxJump);
}

function isBounded(input, minJump, maxJump) {
    return input >= minJump && input <= maxJump;
}

export function eachElemApplies(list, minJump, maxJump, applier) {
    for (let i = 0 ; i < list.length - 1 ; i++) {
        if (i != list.length - 1) {
            const res = applier(list[i], list[i + 1], minJump, maxJump);
            if (!res) {
                return false;
            }
        }
    }
    return true;
}

export function solve(input) {
    return input.split(/\r?\n/g)
        .map(line => parseLineAsArray(line))
        .map(report => isReportSafe(report, 1, 3))
        .filter(o => o)
        .length;
}
