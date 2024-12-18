import { mapNumber, range } from '../utils.js';

function parseLines(input) {
    return input.split(/\r?\n/g)
        .map(line => line.split(/ /g).map(mapNumber).filter(o => o || o <= 0))
        .slice(0, -1)
}

function isReportSafe(list, minJump, maxJump) {
    return eachElemApplies(list, minJump, maxJump, isElemDecreasingBounded)
        || eachElemApplies(list, minJump, maxJump, isElemIncreasingBounded);
}

function isReportSafeBonus(list, minJump, maxJump) {
    return range(list.length)
        .map((_, idx) => list.filter((_2, jdx) => jdx !== idx))
        .map(l => isReportSafe(l, minJump, maxJump))
        .some(o => o);
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

export function applyEachElem(list, minJump, maxJump, applier) {
    return list.reduce((acc, val, idx) => 
            list.length - 1 > idx ? acc.concat([[val, list[idx + 1]]]) : acc
        , [])
        .map(([a, b]) => applier(a, b, minJump, maxJump));
}

export function eachElemApplies(list, minJump, maxJump, applier) {
    return !applyEachElem(list, minJump, maxJump, applier)
        .some(o => !o);
}

export function solve(input) {
    return parseLines(input)
        .filter(report => isReportSafe(report, 1, 3))
        .length;
}

export function bonus(input) {
    return parseLines(input)
        .filter(report => !isReportSafe(report, 1, 3))
        .filter(report => isReportSafeBonus(report, 1, 3))
        .length + solve(input);
}
