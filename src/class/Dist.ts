export class Dist {

    constructor(private _list: string[]) { }

    public get list(): string[] {
        return this._list;
    }

    public add(char: string): void {
        this._list.push(char);
    }
}