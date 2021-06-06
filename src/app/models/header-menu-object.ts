export class HeaderMenuObject {
    constructor(
        public title: String,
        public items: Array<Link>
    ) {}
}

class Link {
    constructor(
        public title:String,
        public url:String,
    ) {}    
}