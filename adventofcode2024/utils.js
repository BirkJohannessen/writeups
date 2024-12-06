import * as fs from 'node:fs';

export async function read(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject();
                return;
            }
            resolve(data);
        });
    });
};

export async function dayWrapper(fun, args) {
    console.log('Executing...')
    const res = fun(args);
    console.log('Finished.')
    return res;
};

export function mapNumber(string) {
    return parseInt(string);
}

export function deepCopy(model) {
    return JSON.parse(JSON.stringify(model));
}

