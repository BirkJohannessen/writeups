import { read, dayWrapper } from './utils.js';
import * as day1utils from './day1/day1utils.js';
import * as day2utils from './day2/day2utils.js';
import * as day3utils from './day3/day3utils.js';
import * as day4utils from './day4/day4utils.js';
import * as day5utils from './day5/day5utils.js';
import * as day6utils from './day6/day6utils.js';
import * as day7utils from './day7/day7utils.js';
import * as day8utils from './day8/day8utils.js';
import * as day9utils from './day9/day9utils.js';
import * as day10utils from './day10/day10utils.js';
import * as day11utils from './day11/day11utils.js';
import * as day12utils from './day12/day12utils.js';
import * as day13utils from './day13/day13utils.js';
import * as day14utils from './day14/day14utils.js';
import * as day15utils from './day15/day15utils.js';
import * as day17utils from './day17/day17utils.js';
import * as day19utils from './day19/day19utils.js';
import * as day25utils from './day25/day25utils.js';

main();

async function main() {
    const fun = day19;
    const result = await fun();
    console.log('Output:\n', result);
}

export async function day1() {
    const ipt = await read('./day1/input.txt');
    return dayWrapper(day1utils.solve, ipt);
}

export async function day2() {
    const ipt = await read('./day2/input.txt');
    return dayWrapper(day2utils.bonus, ipt);
}

export async function day3() {
    const ipt = await read('./day3/input.txt');
    return dayWrapper(day3utils.bonus, ipt);
}

export async function day4() {
    const ipt = await read('./day4/input.txt');
    return dayWrapper(day4utils.bonus, ipt);
}

export async function day5() {
    const ipt = await read('./day5/input.txt');
    return dayWrapper(day5utils.bonus, ipt);
}

export async function day6() {
    const ipt = await read('./day6/input.txt');
    return dayWrapper(day6utils.bonus, ipt);
}

export async function day7() {
    const ipt = await read('./day7/input.txt');
    return dayWrapper(day7utils.bonus, ipt);
}

export async function day8() {
    const ipt = await read('./day8/input.txt');
    return dayWrapper(day8utils.bonus, ipt);
}

export async function day9() {
    const ipt = await read('./day9/input.txt');
    return dayWrapper(day9utils.bonus, ipt);
}

export async function day10() {
    const ipt = await read('./day10/input.txt');
    return dayWrapper(day10utils.solve, ipt);
}

export async function day11() {
    const ipt = await read('./day11/input.txt');
    return dayWrapper(day11utils.bonus, ipt);
}

export async function day12() {
    const ipt = await read('./day12/input.txt');
    return dayWrapper(day12utils.bonus, ipt);
}

export async function day13() {
    const ipt = await read('./day13/input.txt');
    return dayWrapper(day13utils.bonus, ipt);
}

export async function day14() {
    const ipt = await read('./day14/input.txt');
    return dayWrapper(day14utils.bonus, ipt);
}

export async function day15() {
    const ipt = await read('./day15/input.txt');
    return dayWrapper(day15utils.solve, ipt);
}

export async function day17() {
    const ipt = await read('./day17/input.txt');
    return dayWrapper(day17utils.bonus, ipt);
}

export async function day19() {
    const ipt = await read('./day19/input.txt');
    return dayWrapper(day19utils.bonus, ipt);
}

export async function day25() {
    const ipt = await read('./day25/input.txt');
    return dayWrapper(day25utils.solve, ipt);
}
