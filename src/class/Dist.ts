export class Dist {

    private _list: string[];

    constructor(list: string[]) {
        this._list = list;
    }

    public get list(): string[] {
        return this._list;
    }

    public add(char: string): void {
        this._list.push(char);
    }
}