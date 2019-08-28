export class Stack {

    private _stack: string[];

    constructor(stack: string[]) {
        this._stack = stack;
    }

    public get stack(): string[] {
        return this._stack;
    }

    public push(char: string): void {
        this._stack.push(char);
    }

    public isEmpty(): boolean {
        return this._stack.length === 0;
    }

    public top(): string {
        return this._stack[this._stack.length - 1];
    }

    public pop(): string {
        const top = this._stack.pop();
        return typeof top !== 'undefined'? top : '';
    }
}