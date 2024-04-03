function averageThreeNumbers(a, b, c) {
    let sum = a + b + c;
    let result = sum / 3;
    return result;
}

function createSentence(num, noun) {
    const output = `On average, a Berkeley student has ${num} ${noun}s.`;
    return output;
}

function getRandomNum(max) {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
}

let x = getRandomNum(20);
let y = getRandomNum(10);
let z = getRandomNum(13);

let avg = averageThreeNumbers(x, y, z);

let sentence = createSentence(avg, "turtle");
console.log(sentence);