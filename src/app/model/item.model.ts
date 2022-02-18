export class Item {
    name: string;
    price: number;

    constructor(obj?:any) {
        this.name = obj && obj.name || "";
        this.price = obj && obj.price || 0;
    }
}