import { mapNumber } from '../utils.js';

function parseProgram(input) {
    const splits = input.split(/\n/g)
        .join('')
        .match(/-?\d+/g)
        .map(mapNumber)
    return {
        a: splits[0],
        b: splits[1],
        c: splits[2],
        program: splits.slice(3),
        counter: 0,
        output: []
    }
}

function adv(literal, program) {
    program.a = parseInt(program.a / (Math.pow(2, getCombo(literal, program))));
    program.counter += 2;
}

function bdv(literal, program) {
    program.b = parseInt(program.a / (Math.pow(2, getCombo(literal, program))));
    program.counter += 2;
}

function cdv(literal, program) {
    program.c = parseInt(program.a / (Math.pow(2, getCombo(literal, program))));
    program.counter += 2;
}

function bxl(literal, program) {
    program.b = program.b ^ literal;
    program.counter += 2;
}

function bxc(_literal, program) {
    program.b = program.b ^ program.c;
    program.counter += 2;
}

function bst(literal, program) {
    program.b = getCombo(literal, program) % 8;
    program.counter += 2;
}

function jnz(literal, program) {
    if (program.a === 0) {
        program.counter += 2;
        return;
    }
    program.counter = literal;
}

function out(literal, program) {
    program.output.push(getCombo(literal, program) % 8);
    program.counter += 2;
}

function getInstruction(opCode) {
    if (opCode === 0) return adv;
    if (opCode === 1) return bxl;
    if (opCode === 2) return bst;
    if (opCode === 3) return jnz;
    if (opCode === 4) return bxc;
    if (opCode === 5) return out;
    if (opCode === 6) return bdv;
    if (opCode === 7) return cdv;
    throw new Error('not a valid instruction');
}

function getCombo(val, program) {
    if (val === 0) return val;
    if (val === 1) return val;
    if (val === 2) return val;
    if (val === 3) return val;
    if (val === 4) return program.a;
    if (val === 5) return program.b;
    if (val === 6) return program.c;
    throw new Error('not a valid program');
}

function canMoveAlong(program) {
    return program.program.length > program.counter;
}

function moveAlong(program) {
    const instruction = getInstruction(program.program[program.counter]);
    instruction(program.program[program.counter + 1], program);
}

export function solve(input) {
    const program = parseProgram(input);
    while(canMoveAlong(program)) moveAlong(program);
    return program.output.join(',');
}

export function bonus(input) {
    for (let i = 0 ; i < 10000000000000 ; i++) {
        const program = parseProgram(input);
        program.a = i;
        while(canMoveAlong(program) && outIsOk(program)) {
            moveAlong(program);
            if (program.program.length === program.output.length && outIsOk(program)) {
                return i;
            }
        }
        console.log(i);
    }
    return -1;
}

function outIsOk(program) {
    let out = true;
    for (let i = 0 ; i < program.output.length ; i++) {
        out &= program.program[i] === program.output[i];
    }
    return out;
}
