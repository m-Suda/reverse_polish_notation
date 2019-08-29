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

    private _value: string;

    constructor(char: string) {
        this._value = char;
    }

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