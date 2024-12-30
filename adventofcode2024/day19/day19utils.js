import { range } from '../utils.js';

function parseAvailableTowelSet(input) {
    const set = new Set();
    input
        .split(/\n\n/)[0]
        .split(', ')
        .forEach(batch => set.add(batch));
    return set;
}

function parseDesigns(input) {
    return input
        .split(/\n\n/)[1]
        .split(/\n/g)
        .slice(0, -1);
}

function isPossibleDesign(design, avaiableSet, maxBatchLength) {
    if (design === '') return true;
    for (let i = 1; i <= Math.min(design.length, maxBatchLength) ; i++) {
        if (avaiableSet.has(design.substring(0, i))) {
            if (isPossibleDesign(design.slice(i), avaiableSet, maxBatchLength)) return true;
        }
    }
    return false;
}

function countPossibleDesigns(design, avaiableSet) {
    const combosDown = range(design.length).map(_ => 0);
    for (let i = 0 ; i < design.length ; i++) {
        for (let j = i ; j >= 0 ; j--) {
            if (!avaiableSet.has(design.substring(j, i + 1))) continue;
            if (j === 0) {
                combosDown[i] += 1;
            } else {
                combosDown[i] += combosDown[j - 1];
            }
        }
    }
    return combosDown.pop();
}

export function solve(input) {
    const avaiableSet = parseAvailableTowelSet(input);
    const maxBatchLength = [...avaiableSet].reduce((acc, val) => val.length > acc.length ? val : acc, '').length;
    return parseDesigns(input)
        .filter(design => isPossibleDesign(design, avaiableSet, maxBatchLength))
        .length;
}

export function bonus(input) {
    const avaiableSet = parseAvailableTowelSet(input);
    return parseDesigns(input)
        .map(design => countPossibleDesigns(design, avaiableSet))
        .reduce((acc, val) => acc += val, 0);
}

