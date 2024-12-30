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

function countPossibleDesigns(design, avaiableSet, maxBatchLength) {
    if (design === '') return 1;
    let count = 0;
    for (let i = 1; i <= Math.min(design.length, maxBatchLength) ; i++) {
        if (avaiableSet.has(design.substring(0, i))) {
            count += countPossibleDesigns(design.slice(i), avaiableSet, maxBatchLength);
        }
    }
    return count;
}

function countPossibleDesignsOptimized(design, avaiableSet, maxBatchLength) {
    const combosDown = [];
    for (let i = 0 ; i < design.length ; i++) {
        if (i !== 0 && combosDown.length <= i - 1) {
            combosDown.push(0);
        }
        for (let j = i ; j >= 0 && j > (i - maxBatchLength) ; j--) {
            if (avaiableSet.has(design.substring(j, i + 1))) {
                if (combosDown.length <= i && j === i) {
                    if (i - 1 < 0) {
                        combosDown.push(1);
                    } else {
                        combosDown.push(combosDown[i - 1]);
                    }
                } else if (combosDown.length <= i && j !== i) {
                    if (j === 0) {
                        combosDown.push(1);
                    } else {
                        combosDown.push(combosDown[j]);
                    }
                } else {
                    if (j === 0) {
                        combosDown[i] += 1;
                    } else {
                        combosDown[i] += combosDown[j - 1];
                    }
                }
            }
        }
    }
    return combosDown.pop();
}

export function solve(input) {
    const avaiableSet = parseAvailableTowelSet(input);
    const maxBatchLength = [...avaiableSet].reduce((acc, val) => val.length > acc.length ? val : acc, '').length;
    return parseDesigns(input)
        .filter(design => {
            return isPossibleDesign(design, avaiableSet, maxBatchLength)
        })
        .length;
}

export function bonus(input) {
    const avaiableSet = parseAvailableTowelSet(input);
    const maxBatchLength = [...avaiableSet].reduce((acc, val) => val.length > acc.length ? val : acc, '').length;
    return parseDesigns(input)
        .map(design => {
            console.log(design);
            const res = countPossibleDesignsOptimized(design, avaiableSet, maxBatchLength)
            console.log(res);
            return res;
        })
        .reduce((acc, val) => acc += val, 0);
}
/*
 *
12022
brwrr

b
br

 r
  wr
    r

11226(12)(12)(24)
rrbgbr    w  r

r

 r

  b
 rb

   g

    b
   gb
  bgb
     
     r
    br

      w
       
       r
      wr
      
*/
