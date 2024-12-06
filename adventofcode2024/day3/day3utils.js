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

export function solve(input) {
    return input.match(/(mul\(\d+,\d+\))/g)
        .map(parseFunctionArgs)
        .map(([a, b]) => mul(a, b))
        .reduce((a, b) => a += b, 0);
}
