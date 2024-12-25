function mapSymbols(sym) {
    if (sym === '#') return 1;
    if (sym === '.') return 0;
    throw new Error();
}

function parseLocksAndKeys(input) {
    const keysAndLocks = Object.groupBy(
        input.split(/\n\n/g)
        .slice(0, -1)
        .map(map => map
            .split(/\n/g).map(row => row.split('').map(mapSymbols))
        ),
        inputMap => inputMap[0].every(firstRow => firstRow === 1)
    );
    return Object.keys(keysAndLocks).map(o => keysAndLocks[o]);
}


export function solve(input) {
    const [locks, keys] = parseLocksAndKeys(input);
    const lockH = locks.map(lockMap => {
        return lockMap[0].map((_, idx) => {
            let h = 0;
            for (let i = 1 ; i < lockMap.length ; i++) {
                if (lockMap[i][idx] === 1) h += 1;
            }
            return h;
        });
    });

    const keyH = keys.map(keyMap => {
        return keyMap[keyMap.length - 1].map((_, idx) => {
            let h = 0;
            for (let i = keyMap.length - 2 ; i >= 0 ; i--) {
                if (keyMap[i][idx] === 1) h += 1;
            }
            return h;
        });
    });

    // console.dir(keyH, {'maxArrayLength': null})
    // console.dir(lockH, {'maxArrayLength': null})

    return keyH.reduce((acc, key) => {
        return acc += lockH.reduce((keyAcc, lock) => unlock(key, lock) ? keyAcc += 1 : keyAcc, 0);
    }, 0);
}

function unlock(key, lock) {
    return key.every((keyH, idx) => lock[idx] + keyH <= 5);
}

export function bonus(_input) {
    return 0;
}
