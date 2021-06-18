export class Service {
    public id: number;
    public title: string;
    public img: string;
    public isActive:boolean = false;
    public isVisible:boolean;
    
    constructor(id: number, title: string, img: string, isVisible:boolean = true) {
        this.id = id;
        this.title = title;
        this.img = img;
    }
}