export class BackendService {
    public servicioID:number;
    public tipo:string;
    public descripcion:string;
    public precio:string;
    public esPension:string;
    public img_path:string;
    public isSelected:boolean = false;

    public static parse(item:object):BackendService {
        let newObject = new BackendService();
        newObject.servicioID = item['servicioID'];
        newObject.tipo = item['tipo'];
        newObject.descripcion = item['descripcion'];
        newObject.precio = item['precio'];
        newObject.esPension = item['esPension'];
        newObject.img_path = item['img_path'];
        
        return newObject;
    }
}