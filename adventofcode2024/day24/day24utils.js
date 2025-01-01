function parseVariables(input) {
    return input
        .split(/\n\n/)[0]
        .split(/\n/g)
        .map(line => line.split(': '));
}

function parseOperations(input) {
    return input
        .split(/\n\n/)[1]
        .split(/\n/g)
        .map(line => line.split(' '))
        .slice(0, -1)
        .map(o => o.filter(el => el !== '->'))
}

function execOperations(ops, variables, stash) {
    ops.forEach(([a,op,b,r]) => {
        if (!(variables.has(a) && variables.has(b))) {
            stash.push([a,op,b,r]);
        } else {
            let result; 
            if (op === 'OR') result = !!(variables.get(`${a}`) || variables.get(`${b}`));
            if (op === 'XOR') result = !(variables.get(`${a}`) === variables.get(`${b}`));
            if (op === 'AND') result = !!(variables.get(`${a}`) && variables.get(`${b}`));
            variables.set(`${r}`, result ? 1 : 0);
        }
    });
}

export function solve(input) {
    const variables = parseVariables(input).reduce((acc, [k, v]) => acc.set(k, parseInt(v)), new Map());
    let stash = [];

    execOperations(parseOperations(input), variables, stash);

    while (stash.length !== 0) {
        const stashcpy = stash;
        stash = [];
        execOperations(stashcpy, variables, stash);
    }

    const binArr = [];
    for (let i = 0 ; i < [...variables].length ; i++) {
        const val = `${i}`.padStart(2, '0');
        if (!variables.has(`z${val}`)) break;
        binArr.push(variables.get(`z${val}`));
    }
    return binArr.reverse().reduce((acc, bit, index) => acc + bit * Math.pow(2, binArr.length - 1 - index), 0);
}

export function bonus(input) {
    return 0;
}
