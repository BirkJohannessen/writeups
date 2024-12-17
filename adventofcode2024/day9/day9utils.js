import { range, mapNumber } from '../utils.js';

function parse(input) {
    return input.split('')
        .slice(0, -1)
        .map(mapNumber);
}

function decompress(compressedFile) {
    const spread = compressedFile.reduce((acc, value, idx) => acc.concat(range(value).map(_ => idx % 2 === 0 ? idx / 2 : '.')), [])
    const spreadRev = [...spread].reverse();
    const numberOfFilled = spread.reduce((acc, val) => val !== '.' ? ++acc : acc , 0);
    const numberOfSwaps = spread.reduce((acc, val, idx) => idx < numberOfFilled ? val === '.' ? ++acc : acc : acc, 0);
    range(numberOfSwaps)
        .map(nth => spreadRev.length - 1 - findNthIndex(spreadRev, o => o !== '.', ++nth))
        .map((j, idx) => [findNthIndex(spread, o => o === '.', ++idx), j])
        .forEach(([i, j]) => [spread[i], spread[j]] = [spread[j], spread[i]])
    return spread;
}

function decompressOptimized(compressedFile) {
    const spread = compressedFile.reduce((acc, value, idx) => acc.concat(range(value).map(_ => idx % 2 === 0 ? idx / 2 : '.')), [])
    const numberOfFilled = spread.reduce((acc, val) => val !== '.' ? ++acc : acc , 0);
    const numberOfSwaps = spread.reduce((acc, val, idx) => idx < numberOfFilled ? val === '.' ? ++acc : acc : acc, 0);
    let count = 0;
    let j = spread.length - 1;
    for (let i = 0 ; i < spread.length ; i++) {
        let found = false;
        if (spread[i] !== '.') {
            continue;
        }
        while (!found) {
            if (spread[j] !== '.') {
                [spread[i], spread[j]] = [spread[j], spread[i]];
                count += 1;
                found = true;
            }
            j -= 1;
        }
        if (count === numberOfSwaps) break;
    }
    return spread;
}

function decompressBonus(compressedFile) {
    const file = compressedFile.map((val, idx) => {
        return {
            id: idx % 2 === 0 ? idx / 2 : -1,
            quantity: val
        }
    }).filter(o => o.quantity !== 0);

    for (let j = file.length - 1 ; j >= 0 ; j--) {
        let i = 0;
        let found = false;
        if (file[j].id === -1) continue;
        while (!found) {
            if (file[i].id === -1 && file[i].quantity >= file[j].quantity) {
                found = true;
                if (file[i].quantity === file[j].quantity) {
                    [file[i], file[j]] = [file[j], file[i]];
                } else {
                    const newFree = {
                        id: -1,
                        quantity: file[i].quantity - file[j].quantity
                    };
                    if (file[i + 1].id === -1) {
                        file[i + 1].quantity += newFree.quantity;
                        file[i].quantity = file[j].quantity;
                        [file[i], file[j]] = [file[j], file[i]];
                    } else {
                        file[i].quantity = file[j].quantity;
                        [file[i], file[j]] = [file[j], file[i]];
                        file.splice(i + 1, 0, newFree);
                        j += 2;
                    }
                }
            }
            i += 1;
            if (j < i) break;
        }
    }
    return file.reduce((acc, value, _) => acc.concat(range(value.quantity).map(_ => value.id === -1 ? '.' : value.id)), []);
}

function findNthIndex(list, predicate, nth) {
    if (!nth) return -1;
    const idx = list.findIndex(predicate);
    if (idx === -1) return idx;
    if (nth === 1) return idx;
    const nextIdx = findNthIndex(list.slice(idx + 1), predicate, --nth);
    return nextIdx >= 0 ? nextIdx + idx + 1 : nextIdx;
}

function checksum(file) {
    return file
        .map((o, idx) => o === '.' ? 0 : o * idx)
        .reduce((acc, val) => acc += val, 0)
}

export function solve(input) {
    return [parse(input)]
        .map(decompressOptimized)
        .map(checksum)[0];
}

export function bonus(input) {
    return [parse(input)]
        .map(decompressBonus)
        .map(checksum)[0];
}
