export class Hotel {
    public hotelID: number;
    public nombre: string;
    public localizacion: string;
    public img_path: string;
    public descripcion: string;
    public direccion: string;

    constructor() { }

    public static parse(item: object): Hotel {
        let newObject = new Hotel();

        newObject.hotelID = item['hotelID'];
        newObject.nombre = item['nombre'];
        newObject.localizacion = item['localizacion'];
        newObject.img_path = item['img_path'];
        newObject.descripcion = item['descripcion'];
        newObject.direccion = item['direccion'];

        return newObject;
    }
}