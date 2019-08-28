export class Stack {

    private _stack: string[];

    constructor(stack: string[]) {
        this._stack = stack;
    }

    public get stack(): string[] {
        return this._stack;
    }

    public add(char: string): void {
        this._stack.push(char);
    }

    public top(): string {
        return this._stack[this._stack.length - 1];
    }
}