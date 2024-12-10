import { range, mapNumber, deepCopy} from '../utils.js';
function parse(input) {
    return input.split('')
        .slice(0, -1)
        .map(mapNumber);
}

function decompress(compressedFile) {
    console.log('start');
    const spread = compressedFile.reduce((acc, value, idx) => acc.concat(range(value).map(_ => idx % 2 === 0 ? idx / 2 : '.')), [])
    console.log('end');
    const spreadRev = [...spread].reverse();
    const filled = spread.reduce((acc, val) => val !== '.' ? ++acc : acc , 0);
    const asdf = spread.reduce((acc, val, idx) => idx < filled ? val === '.' ? ++acc : acc : acc, 0);
    console.log('len', spread);
    range(asdf)
        .map(nth => spreadRev.length - 1 - findNthIndex(spreadRev, o => o !== '.', ++nth))
        .map((j, idx) => [findNthIndex(spread, o => o === '.', ++idx), j])
        .forEach(([i, j]) => [spread[i], spread[j]] = [spread[j], spread[i]])
    console.log([spread]);
    return spread;
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
        .filter(o => o !== '.')
        .map((o, idx) => o * idx)
        .reduce((acc, val) => acc += val, 0)
}

export function solve(input) {
    console.log(range(10).map(i => findNthIndex([99,5,9,99,99,3,5,99,1,3,99,99], (o) => o === 99, i)));
    return [parse(input)]
        .map(decompress)
        .map(checksum)[0];
}
