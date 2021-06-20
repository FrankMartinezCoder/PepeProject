export interface Management {
    getColumns():Array<string>;
    get(columId:number) :any;
}