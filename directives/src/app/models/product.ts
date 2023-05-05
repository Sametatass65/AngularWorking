export class Product {
    id:number;
    name:string;
    size:type;

    constructor(id:number, name:string, size:type)
    {
        this.id = id;
        this.name = name;
        this.size = size;
    }
}
export enum type
{
    Big = 1,
    Medium = 2,
    Small = 3
}
