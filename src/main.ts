import { NumberOfOperationCharacter } from './class/NumberOfOperationCharacter';
import { Stack } from './class/Stack';
import { Dist } from './class/Dist';

const formula: string = "a + b + c * d + e / f";
const formulaArr: string[] = [...formula.replace(/\s/g, '')];
const FORMULA_LENGTH: number = formulaArr.length;

const dist: Dist = new Dist([]);
const stack: Stack = new Stack([]);

for (let i = 0; i < FORMULA_LENGTH; i++) {

    const char: NumberOfOperationCharacter = new NumberOfOperationCharacter(formulaArr[i]);

    if (char.isOperator()) {
        if (stack.isEmpty()) {
            stack.push(char.value);
            continue;
        }
        // 演算子がスタックトップよりも優先度が高ければ、スタックの中身を全て降ろし、その後スタックに積む。
        if (char.hasHigherPriorityThan(stack.top())) {
            while (!stack.isEmpty()) {
                dist.add(stack.pop());
            }
        }
        stack.push(char.value);
        continue;
    }

    dist.add(char.value);
}

// 最後にスタックに積まれた演算子を全て降ろす
while (!stack.isEmpty()) {
    dist.add(stack.pop());
}

const result = dist.list.join('');

console.log(result);