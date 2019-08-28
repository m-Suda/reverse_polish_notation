import { NumberOfOperationCharacter } from './class/NumberOfOperationCharacter';
import { Stack } from './class/Stack';
import { Dist } from './class/Dist';

const dist: Dist = new Dist([]);
const stack: Stack = new Stack([]);

const formula: string = "1 + 2";
const formulaArr: string[] = [...formula.replace(/\s/g, '')];
const FORMULA_LENGTH: number = formulaArr.length;

for (let i = 0; i < FORMULA_LENGTH; i++) {

    const char: NumberOfOperationCharacter = new NumberOfOperationCharacter(formulaArr[i]);

    if (char.isOperator()) {
        if (char.hasHigherPriorityThan(stack.top())) {
            // 演算子がスタックトップよりも優先度が高ければ、スタックの中身を全て降ろす。
        }
        stack.add(char.value);
        continue;
    }

    dist.add(char.value);
}
