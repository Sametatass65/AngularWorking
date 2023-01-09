export class Model {
    items;
    title;

    constructor() {
        this.title = 'first-project';
        this.items = [
            new toDoItem("Kahvaltı",false),
            new toDoItem("Sinema", true),
            new toDoItem("Ders",true),
            new toDoItem("Proje",true)
        ];
    }
}

export class toDoItem{
    description;
    action;

    constructor(description:string, action:boolean){
        this.action = action;
        this.description = description;
    }

}