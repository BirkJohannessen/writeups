import { eachElemApplies, isElemIncreasingBounded } from '../day2/day2utils.js'
import { mapNumber, deepCopy } from '../utils.js'

function parseRecords(input) {
    return input.split('\n\n')[1]
        .split(/\n/g).map(line => line.split(',').map(mapNumber))
        .slice(0, -1);
}

function parseRules(input) {
    return input.split('\n\n')[0]
        .split(/\r?\n/g).map(line => line.split('|').map(mapNumber))
}


function isIncreasing(list) {
    return eachElemApplies(list, 0, 9999999999, isElemIncreasingBounded);
}

function mapMiddleElem(list) {
    return list[parseInt(list.length / 2)]
}

export function solve(input) {
    const tree = new NTreeWrapper(parseRules(input));
    return parseRecords(input)
        .filter(records => isIncreasing(records.map(e => tree.level(e))))
        .map(mapMiddleElem)
        .reduce((a,b) => a += b, 0)
}

class NTreeWrapper {
    constructor(rules) {
        this.stash = [];
        this.applyRules(rules);
        this.deepprint(this.node);
    }

    deepprint(node) {
        const lvl = this.level(node.value) * 4;
        console.log(' '.repeat(lvl) + '<', node._value)
        node._children.forEach(c => this.deepprint(c));
        console.log(' '.repeat(lvl) + '</', node._value)
    }

    applyRules(rules) {
        rules.forEach(([value, constraint]) => {
            this.put(value, constraint);
        });
        this.deepprint(this.node);
        this.buildStash();
    }

    buildStash() {
        console.log('building stash', this.stash);
        let asdf = 0;
        while (this.stash.length > 0) {
            const stashlocal = deepCopy(this.stash.reverse());
            this.stash = [];
            let stashLocalLen = stashlocal.length;
            while(stashLocalLen > 0) {
                const [value, constraint] = stashlocal.pop();
                this.put(value, constraint);
                stashLocalLen--;
            }
            asdf += 1;
            console.log(asdf)
            console.log('rebuilding stash', this.stash);
            if (asdf === 2) {
                throw new Error();
            }
        }
        console.log('done with stash');
        return this;
    }

    level(value) {
        if (this.node.value === value) return 0;
        return this.node.walkToLvlOf(value);
    }

    find(value) {
        if (this.node.value === value) return this.node;
        return this.node.walkTo(value);
    }

    killChild(value) {
        // console.log('killing', value)
        if (this.node.value === value) {
            this.node.removeChild(value);
        } else {
            this.node.walkToParent(value).removeChild(value);
        }
    }

    put(value, constraint) {
        if (!this.node) {
            this.node = new Nnode(value);
            this.node.pushChild(constraint);
            this.deepprint(this.node);
            return;
        }
        const vNode = this.find(value);
        const cNode = this.find(constraint);
        console.log(value, constraint, !!vNode,  !!cNode);
        if (value === 34) {
            console.log('34', vNode);
        }
        if (vNode && cNode) {
            const vlvl = this.level(value);
            const clvl = this.level(constraint);
            if (vlvl < clvl) {
                console.log('stashed', vlvl, clvl);
                this.stash.push([value, constraint]);
                return;
            };
            this.killChild(constraint);
            vNode._children.push(cNode);
        } else if (vNode && !cNode) {
            vNode.pushChild(constraint);
        } else if (!vNode && cNode) {
            const newnode = new Nnode(value);
            newnode._children.push(cNode);
            if (this.node.value === constraint) {
                this.node = newnode;
            } else {
                const _parent = this.node.walkToParent(constraint);
                const idx = _parent._children.findIndex(o => o.value === constraint);
                if (idx > -1) {
                    _parent._children.splice(idx, 1)
                } else {
                    throw new Error();
                }
                _parent._children.push(newnode);
            }
        } else if (!vNode && !cNode) {
            this.stash.push([value, constraint]);
        }
        this.deepprint(this.node);
    }
}

class Nnode {
    constructor(nodeValue) {
        this._value = nodeValue;
        this._children = []
    }

    get value() { return this._value; }

    pushChild(constraint) {
        this._children.push(new Nnode(constraint));
    }

    removeChild(childValue) {
        const idx = this._children.findIndex(o => o.value === childValue);
        if (idx > -1) {
            this._children.splice(idx, 1)
        }
    }

    walkTo(value) {
        const n = this.walkToParent(value)
        if (n) return n._children.find(o => o.value === value);
        return null;
    }

    // dangerous. needs to know the god node isnt the parent before calling
    walkToLvlOf(value) {
        if (this._children.some(o => o.value === value)) return 1;
        for (let i = 0 ; i < this._children.length ; i++) {
            let result = this._children[i].walkToLvlOf(value);
            if (result) return ++result;
        };
        return null;
    }

    // dangerous. needs to know the god node isnt the parent before calling
    walkToParent(value) {
        if (this._children.some(o => o.value === value)) return this;
        for (let i = 0 ; i < this._children.length ; i++) {
            let result = this._children[i].walkToParent(value);
            if (result) return result;
        };
        return null;
    }
}
