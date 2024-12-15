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
        /*
        .reduce((acc, [x,y]) => {
            acc[y][x] += 1;
            return acc;
        }, range(7).map(_ => range(11).map(__ => 0)))
        .map(o => {
            console.log(o)
            return o;
        })
        */
        .reduce(([q1, q2, q3, q4], [x, y]) => {
            if (x < (mx - 1) / 2 && y < (my - 1) / 2) q1 +=1;
            if (x > (mx - 1) / 2 && y < (my - 1) / 2) q2 +=1;
            if (x < (mx - 1) / 2 && y > (my - 1) / 2) q3 +=1;
            if (x > (mx - 1) / 2 && y > (my - 1) / 2) q4 +=1;
            return [q1, q2, q3, q4];
        }, [0,0,0,0])
        .reduce((acc, val) => acc *= val, 1)
    // console.log(map.map(row => row.map(val => val === 0 ? '.' : val).join('')).join('\n'));
    // return 0;
}

function positionEquals(a, b) {
    const set1 = new Set();
    a.forEach(([x,y]) => set1.add(-x*y));
    const set2 = new Set();
    b.forEach(([x,y]) => set2.add(-x*y));
    if (set1.size !== set2.size) return false;
    return [...set1].every(val => set2.has(val));
}

function transformQuadrant(quadrant, my) {
    //return quadrant.map(([x, y]) => [x - ((mx + 1) / 2), y]);
    return quadrant.map(([x, y]) => [x, y - ((my + 1) / 2)]);
}

export function bonus(input) {
    const mapSize = [101, 103];
    const [mx, my] = mapSize;
    for (let i = 0; i < 70000 ; i++) {
        const pos =  parse(input)
            .map(([pos, vel]) => calcPos(pos, vel, i, mapSize));

        const [a, b] = pos 
            .reduce(([q1, q2], [x, y]) => {
                if (x < (mx - 1) / 2 && y < (my - 1) / 2) q1.push([x,y]);
                if (x > (mx - 1) / 2 && y < (my - 1) / 2) q2.push([x,y]);
                return [q1, q2];
            }, [[], []]);

        if (a.length !== b.length) continue;

        if (positionEquals(a, transformQuadrant(b, my))) {
            const map = pos
                .reduce((acc, [x,y]) => {
                    acc[y][x] += 1;
                    return acc;
                }, range(my).map(_ => range(mx).map(__ => 0)));

            console.log(map.map(row => row.map(val => val === 0 ? '.' : val).join('')).join('\n'));
            console.log(i);
            return i;
        }
        console.log(i);
    }
}
