import { mapNumber, range } from '../utils.js';

function parse(input) {
    return input.split(/\n/g)
        .slice(0, -1)
        .map(robot => robot.match(/-?\d+/g)
            .map(mapNumber)
        )
        .map(([a,b,c,d]) => [[a,b],[c,d]]);
}

function fixWithin(val, max) {
    if (val >= max) return val - max;
    if (val < 0) return max + val;
    return val;
}

function calcPos([px, py], [vx, vy], round, [mx, my]) {
    return [
        fixWithin(((vx * round) % mx) + px, mx),
        fixWithin(((vy * round) % my) + py, my)
    ];
}

export function solve(input) {
    const mapSize = [101, 103];
    const [mx, my] = mapSize;
    return parse(input)
        .map(([pos, vel]) => calcPos(pos, vel, 100, mapSize))
        .reduce(([q1, q2, q3, q4], [x, y]) => {
            if (x < (mx - 1) / 2 && y < (my - 1) / 2) q1 +=1;
            if (x > (mx - 1) / 2 && y < (my - 1) / 2) q2 +=1;
            if (x < (mx - 1) / 2 && y > (my - 1) / 2) q3 +=1;
            if (x > (mx - 1) / 2 && y > (my - 1) / 2) q4 +=1;
            return [q1, q2, q3, q4];
        }, [0,0,0,0])
        .reduce((acc, val) => acc *= val, 1)
}

export function bonus(input) {
    const mapSize = [101, 103];
    const [mx, my] = mapSize;
    for (let i = 0; i < 28581 ; i++) {

        const pos =  parse(input)
            .map(([pos, vel]) => calcPos(pos, vel, i, mapSize));

        const hasChristmasTree = pos
            .map(([x,y]) => countAlong([x,y], pos.filter(([_fx, fy]) => fy === y), 0))
            .filter(o => o == 30)
            .length > 0

        if (hasChristmasTree) {
            const map = pos
                .reduce((acc, [x,y]) => {
                    acc[y][x] += 1;
                    return acc;
                }, range(my).map(_ => range(mx).map(__ => 0)));

            console.log(map.map(row => row.map(val => val === 0 ? '.' : val).join('')).join('\n'));
            return i;
        }
    }
}

function countAlong([x,_], Ypos, count) {
    const a = Ypos.find(([fx, _2]) => fx === x + 1);
    if (!a) return count;
    return countAlong(a, Ypos, ++count)
}
