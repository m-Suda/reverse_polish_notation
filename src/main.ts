import { NumberOfOperationCharacter } from './class/NumberOfOperationCharacter';
import { Stack } from './class/Stack';
import { Dist } from './class/Dist';

const formula: string = "((a+b)*(c-(d+e)/(f+(g-h*(i-j)+k)-l)))";
const formulaArr: string[] = [...formula.replace(/\s/g, '')];
const FORMULA_LENGTH: number = formulaArr.length;

const dist: Dist = new Dist([]);
const stack: Stack = new Stack([]);

console.log(`変換前の式: ${formula}`);

for (let i = 0; i < FORMULA_LENGTH; i++) {

    const char: NumberOfOperationCharacter = new NumberOfOperationCharacter(formulaArr[i]);

    if (!char.isOperator()) {
        dist.add(char.value);
        continue;
    }

    if (stack.isEmpty()) {
        stack.push(char.value);
        continue;
    }

    if (char.isLeftBrackets()) {
        stack.push(char.value);
        continue;
    }

    // 右括弧の時、スタックに左括弧が来るまでポップし、最後に左括弧をポップ
    if (char.isRightBrackets()) {
        while (!stack.topIsLeftBrackets()) {
            dist.add(stack.pop());
        }
        stack.pop();
        continue;
    }

    // 演算子がスタックトップよりも優先度が高ければ、スタックの中身を全てまたは左括弧まで降ろし、その後スタックに積む。
    if (char.hasHigherPriorityThan(stack.top())) {
        while (!stack.isEmpty()) {
            // 左括弧があるならそこまでしか降ろさない
            if (stack.topIsLeftBrackets()) {
                break;
            }
            dist.add(stack.pop());
        }
    }

    stack.push(char.value);
}

// 最後にスタックに積まれた演算子を全て降ろす
while (!stack.isEmpty()) {
    dist.add(stack.pop());
}

const result = dist.list.join('');

console.log(`逆ポーランド記法に変換した式: ${result}`);