function parseFunctionArgs(stringFunction) {
    return stringFunction
        .replace(/.*\(/g, '')
        .replace(/\)/g, '')
        .split(/,/g)
        .map(o => parseInt(o))
}

function mul(a, b) {
    return a * b;
}

function filterDos(functions) {
    const result = [];
    let push = true;
    functions.forEach(fun => {
        if (fun === 'do()') {
            push = true;
        } else if (fun === 'don\'t()') {
            push = false;
        } else {
            if (push) result.push(fun);
        }
    });
    return result;
}

export function solve(input) {
    return input.match(/(mul\(\d+,\d+\))/g)
        .map(parseFunctionArgs)
        .map(([a, b]) => mul(a, b))
        .reduce((a, b) => a += b, 0);
}

export function bonus(input) {
    return filterDos(input.match(/(mul\(\d+,\d+\))|(do\(\))|(don\'t\(\))/g))
        .map(parseFunctionArgs)
        .map(([a, b]) => mul(a, b))
        .reduce((a, b) => a += b, 0);
}

