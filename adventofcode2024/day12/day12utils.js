function parse(input) {
    return input.split(/\n/g)
        .slice(0, -1)
        .map(line => line.split(''));
}

function areaAndSides(map) {
    const included = [];
    const result = [];
    map.forEach((row, i) => {
        row.forEach((val, j) => {
            if (!isIncluded([i, j], included)) {
                const flowerMap = getFlowerMap([i,j], [0, 0], val, included, [], map)
                result.push([area(flowerMap), sides(flowerMap)]);
            }
        });
    });
    return result;
}

function areaAndPerimiter(map) {
    const included = [];
    const result = [];
    map.forEach((row, i) => {
        row.forEach((val, j) => {
            if (!isIncluded([i, j], included)) {
                const flowerMap = getFlowerMap([i,j], [0, 0], val, included, [], map)
                result.push([area(flowerMap), perimiter(flowerMap)]);
            }
        });
    });
    return result;
}

function getFlowerMap([startX, startY], [x, y], value, included, flowerMap, map) {
    if (!isBounded([startX + x, startY + y], map)) return;
    if (map[startX + x][startY + y] !== value) return;
    if (isIncluded([startX + x, startY + y], included)) return;
    included.push([startX + x, startY + y]);
    flowerMap.push([x, y]);
    getFlowerMap([startX, startY], [x + 1, y], value, included, flowerMap, map);
    getFlowerMap([startX, startY], [x - 1, y], value, included, flowerMap, map);
    getFlowerMap([startX, startY], [x, y + 1], value, included, flowerMap, map);
    getFlowerMap([startX, startY], [x, y - 1], value, included, flowerMap, map);
    return flowerMap;
}

function area(map) {
    return map.reduce((acc, val) => val ? acc += 1 : acc, 0);
}

function perimiter(map) {
    return map.reduce((acc, tuple) => acc += tuplePerims(tuple, map), 0);
}

function tuplePerims([x, y], map) {
    return [[0,1],[1,0],[0, -1],[-1, 0]]
        .filter(([dirX, dirY]) => !isIncluded([x - dirX, y - dirY], map))
        .length;
}

function sides(map) {
    return 0; // todo;
}

function isIncluded([inX, inY], included) {
    return !!included.find(([x,y]) => x === inX && inY === y);
}

function isBounded([x, y], map) {
    return x > -1 && x < map.length && y > -1 && y < map[0].length;
}

export function solve(input) {
    return areaAndPerimiter(parse(input))
        .reduce((acc, [area, perimiter]) => acc += area * perimiter, 0)
}

export function bonus(input) {
    return areaAndSides(parse(input))
        .map(o => {
            console.log(o);
            return o;
        })
        .reduce((acc, [area, sides]) => acc += area * sides, 0)
}
