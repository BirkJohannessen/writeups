import { range } from '../utils.js';

const player = 8;
const freeSpace = 0;
const wall = 2;
const box = 7;

function reverseMapSymbol(symbol) {
    if (symbol === 0) return '.';
    if (symbol === 2) return '#';
    if (symbol === 3) return '^';
    if (symbol === 4) return '>';
    if (symbol === 5) return 'v';
    if (symbol === 6) return '<';
    if (symbol === 7) return 'O';
    if (symbol === 8) return '@';
}

function mapSymbols(symbol) {
    if (symbol === '.') return 0;
    if (symbol === '#') return 2;
    if (symbol === '^') return 3;
    if (symbol === '>') return 4;
    if (symbol === 'v') return 5;
    if (symbol === '<') return 6;
    if (symbol === 'O') return 7;
    if (symbol === '@') return 8;
}

function parseMap(input) {
    return input.split(/\n\n/)[0]
        .split(/\n/g).map(row => row.split('').map(mapSymbols))
}

function parseInstructions(input) {
    return input.split(/\n\n/)[1]
        .split(/\n/g).join('').split('').map(mapSymbols);
}

function findPlayerTuple(map) {
    for (let i = 0 ; i < map.length ; i++) {
        for (let j = 0 ; j < map.length ; j++) {
            if (map[i][j] === player) return [i, j];
        };
    };
    throw new Error('no player');
}

function executeInstruction(instruction, map) {
    const dir = instructionDirectionTuples(findPlayerTuple(map), instruction, map);
    const [px, py] = dir[0];
    const [tx, ty] = dir[1];
    if (map[tx][ty] === wall) return;
    if (map[tx][ty] === freeSpace) {
        map[px][py] = freeSpace;
        map[tx][ty] = player;
        return;
    }
    const dirValues = dir.map(([x,y]) => map[x][y]); 
    if (map[tx][ty] === box && dirValues.find(o => o === freeSpace) === 0 && dirValues.findIndex(o => o === wall) > dirValues.findIndex(o => o === freeSpace)) {
        let holdval = map[px][py];
        for (let i = 1 ; i < dir.length ; i++) {
            const [x, y] = dir[i];
            const swap = holdval;
            holdval = map[nx][ny];
            map[x][y] = swap;
            if (holdval === freeSpace) break;
        }
        map[px][py] = freeSpace;
    }
}

function instructionDirectionTuples([px, py], instruction, map) {
    if (instruction === 3) return range(px + 1).reverse().map(x => [x, py]);
    if (instruction === 4) return range(map[0].length - py).map(y => map[0].length - 1 - y).reverse().map(y => [px, y]);
    if (instruction === 5) return range(map.length - px).map(x => map.length - 1 - x).reverse().map(x => [x, py]);
    if (instruction === 6) return range(py + 1).reverse().map(y => [px, y]);
    throw new Error('not a direction');
}

export function solve(input) {
    const map = parseMap(input);
    drawMap(map);
    parseInstructions(input).forEach(instruction => {
        executeInstruction(instruction, map);
    });
    return map
        .reduce((acc, row, i) => acc + row.reduce((sAcc, tile, j)=> sAcc + (tile === box ? 100 * i + j : 0), 0), 0);
}

function drawMap(map) {
    console.log(map.map(row => row.map(tile => reverseMapSymbol(tile)).join('')).join('\n'));
}

export function bonus(input) {
    return 0;
}
