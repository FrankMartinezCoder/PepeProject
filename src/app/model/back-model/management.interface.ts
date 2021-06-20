export interface Management {
    getColumns():Array<string>;
    get(columId:number) :any;
    getFields():Array<string>;
    getField(id:number):any;
}