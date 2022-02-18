import { Menu } from "./menu.model";

export class MenuList {
    count: number;
    results: Menu[];

    constructor(obj?:any) {
        this.count = obj && obj.count || 0;
        this.results = obj && obj.results && obj.results.map((x:any) => new Menu(x)) || [];
    }
}