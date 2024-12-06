import { read, dayWrapper } from './utils.js';
import * as day1utils from './day1/day1utils.js';
import * as day2utils from './day2/day2utils.js';
import * as day3utils from './day3/day3utils.js';
import * as day4utils from './day4/day4utils.js';
import * as day5utils from './day5/day5utils.js';

main();

async function main() {
    const fun = day5;
    const result = await fun();
    console.log('Output:\n', result);
}

export async function day1() {
    const ipt = await read('./day1/input.txt');
    return dayWrapper(day1utils.solve, ipt);
}

export async function day2() {
    const ipt = await read('./day2/input.txt');
    return dayWrapper(day2utils.solve, ipt);
}

export async function day3() {
    const ipt = await read('./day3/input.txt');
    return dayWrapper(day3utils.solve, ipt);
}

export async function day4() {
    const ipt = await read('./day4/input.txt');
    return dayWrapper(day4utils.solve, ipt);
}

export async function day5() {
    const ipt = await read('./day5/input.txt');
    return dayWrapper(day5utils.solve, ipt);
}