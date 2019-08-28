const { isOperator } = require('./helper/operator');

const dist = [];
const stack = [];

const formula = "1 + 2";
const formulaArr = [...formula.replace(/\s/g, '')];
const FORMULA_LENGTH = formulaArr.length;

for (let i = 0; i < FORMULA_LENGTH; i++) {

    const char = formulaArr[i];

    if (isOperator(char)) {
        stack.push(char);
        continue;
    }

    dist.push(char);
}

const result = [...dist, ...stack];

console.log(result.join(''));