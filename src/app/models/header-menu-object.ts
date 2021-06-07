export class HeaderMenuObject {
    constructor(
        public title: String,
        public items: Array<Link>
    ) {}
}

class Link {
    constructor(
        public id:number,
        public name:String,
        public url:String
    ) {}    
}