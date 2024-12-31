import { combinations } from '../utils.js';

function parseConnections(input) {
    return input
        .split(/\n/g)
        .slice(0, -1)
        .map(str => str.split('-'));
}

function getConnections(h2p, conns) {
    const res = new Set();
    [...h2p.keys()]
        .map(key => 
            [...combinations(h2p.get(key))]
                .map(([a,b]) => [a, key, b])
        )
        .flat()
        .filter(([a,_,b]) => !!conns.find((inp) => inp.includes(a) && inp.includes(b)))
        .map(o => o.sort())
        .forEach(([a,b,c]) => res.add(`-${a}-${b}-${c}`));
    return [...res];
}

export function solve(input) {
    const conns = parseConnections(input);
    const h2p = [...conns.flat()
        .reduce((acc, val) => {
        acc.add(val);
        return acc;
    }, new Set())]
        .reduce((acc, pc) => {
            acc.set(pc, conns.reduce((sacc, [a, b]) => {
                    if (a === pc) sacc.push(b);
                    if (b === pc) sacc.push(a);
                    return sacc;
                }, []));
            return acc;
        }, new Map());
    return getConnections(h2p, conns)
        .filter(key => key.includes('-t'))
        .length;
}

function largestLan(connections, h2p) {
    const lans = [];
    const host = connections[0];
    for (let i = 1 ; i < connections.length ; i++) {
        let added = false;
        for (let j = 0 ; j < lans.length ; j ++) {
            const currlan = lans[j];
            let applicable = true;
            for (let l = 0 ; l < currlan.length ; l++) {
                if (!h2p.get(currlan[l]).has(connections[i])) {
                    applicable = false;
                    break;
                }
            }
            if (applicable) lans[j].push(connections[i]);
        }
        if (!added) {
            const newLan = []
            newLan.push(host);
            newLan.push(connections[i]);
            lans.push(newLan);
        }
    }
    return lans.sort((a, b) => b.length - a.length)[0];
}

export function bonus(input) {
    const conns = parseConnections(input);
    const h2p = [...conns.flat()
        .reduce((acc, val) => {
        acc.add(val);
        return acc;
    }, new Set())]
        .reduce((acc, pc) => {
            acc.set(pc, conns.reduce((sacc, [a, b]) => {
                    if (a === pc) sacc.add(b);
                    if (b === pc) sacc.add(a);
                    return sacc;
                }, new Set()));
            return acc;
        }, new Map());
    return [...h2p.keys()]
        .map(k => [k, ...h2p.get(k)])
        .map(o => largestLan(o, h2p))
        .map(lan => lan.sort())
        .sort((a,b) => b.length - a.length)
        [0].join(',');
}
