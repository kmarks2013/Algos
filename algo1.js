// this algo comapred the a series of  3 numbers in arrays a and b and returned the score as a string. points were added to a if a[i] > b[i] and to b if a[i] < a[i] 


'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    let i = 0
    let aScore = 0
    let bScore = 0

    if (a.length === b.length)
        while (i < a.length) {
            if (a[i] > b[i]) {
                aScore ++
            } else if (a[i] < b[i]) {
                bScore ++
            }
            
            i++
        }

    const scores = [aScore, bScore]
    return scores
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
