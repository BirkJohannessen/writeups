import { mapNumber } from '../utils.js';

function parseInitials(input) {
    return input.split(/\n/g)
        .slice(0, -1)
        .map(mapNumber);
}

function generateSecretList(prev, acc, i) {
    if (i === 0) return acc;
    let result;
    let curr = prev * 64
    result = curr ^ prev;
    result = result % 16777216;
    curr = Math.floor(result / 32);
    result = (result ^ curr) >>> 0;
    result = result % 16777216;
    curr = result * 2048;
    result = (result ^ curr) >>> 0;
    result = result % 16777216;
    acc.push(result);
    return generateSecretList(result, acc, --i);
}

export function solve(input) {
    return parseInitials(input)
        .map(init => generateSecretList(init, [], 2000).reverse()[0])
        .reduce((acc, val) => acc += val, 0);
}

function calcDiffsToVal(secretList, diffsToVal, currDiff, maxDiffs, i) {
    if (currDiff.length < maxDiffs) {
        currDiff.push(secretList[i - 1] - secretList[i]);
        return calcDiffsToVal(secretList, diffsToVal, currDiff, maxDiffs, --i);
    } else {
        const [a,b,c,d] = currDiff;
        const key = `${a},${b},${c},${d}`;
        if (!diffsToVal.has(key)) {
            diffsToVal.set(key, secretList[i]);
        }
        currDiff.shift();
        currDiff.push(secretList[i - 1] - secretList[i]);
        if (i === 0) return diffsToVal;
        return calcDiffsToVal(secretList, diffsToVal, currDiff, maxDiffs, --i);
    }
}

export function bonus(input) {
    const resultMap = new Map();
    parseInitials(input)
        .map(init => generateSecretList(init, [init], 2000).reverse())
        .map(secrets => secrets.map(o => o % 10))
        .map(secrets => calcDiffsToVal(secrets, new Map(), [], 4, 2000))
        .forEach(map => {
            [...map.keys()].forEach(k => {
                if (resultMap.has(k)) {
                    resultMap.set(k, resultMap.get(k) + map.get(k));
                } else {
                    resultMap.set(k, map.get(k))
                }
            });
        });
    return [...resultMap.values()].sort((a, b) => b - a)[0];
}
