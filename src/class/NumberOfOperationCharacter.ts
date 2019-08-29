import {
    isOperator,
    isHigherPriorityThanOperator,
    isLeftBrackets,
    isRightBrackets
} from '../helper/operator';

/**
 * 演算式の文字クラス
 */
export class NumberOfOperationCharacter {

    constructor(private readonly _value: string) { }

    public get value(): string {
        return this._value;
    }

    public isOperator(): boolean {
        return isOperator(this._value);
    }

    public isLeftBrackets(): boolean {
        return isLeftBrackets(this.value);
    }

    public isRightBrackets(): boolean {
        return isRightBrackets(this.value);
    }

    public hasHigherPriorityThan(stackTop: string) {
        return isHigherPriorityThanOperator(this._value, stackTop);
    }
}