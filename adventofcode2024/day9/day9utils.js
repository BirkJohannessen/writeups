function parse(input) {
    return input.split('')
        .slice(0, -1);
}

function decompress(compressedFile) {
    const blockSizes = compressedFile.reduce((acc, value, id) => {
        if (id % 2 === 0) {
            acc[(id / 2)] = value;
        }
        return acc;
    }, []);
    const freeSizes = compressedFile.reduce((acc, value, id) => {
        if (id % 2 === 1) {
            acc[(id / 2)] = value;
        }
        return acc;
    }, []);
}

function checksum(file) {
}

export function solve(input) {
    return parse(input)
        .map(decompress)
        .map(checksum)
}
