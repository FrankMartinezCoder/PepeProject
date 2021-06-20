import { Management } from "./management.interface";

export class Hotel implements Management{
    public hotelID: number;
    public nombre: string;
    public localizacion: string;
    public img_path: string;
    public descripcion: string;
    public direccion: string;

    constructor() { }
    getColumns(): string[] {
        throw new Error("Method not implemented.");
    }

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

    public getJSON(): object {
        return {
            "hotelID" : this.hotelID,
            "nombre" : this.nombre,
            "localizacion" : this.localizacion,
            "img_path" : this.img_path,
            "descripcion" : this.descripcion,
            "direccion" : this.direccion
        }
    }
}