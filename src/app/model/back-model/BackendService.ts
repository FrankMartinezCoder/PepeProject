import { Hotel } from "./Hotel";
import { Management } from "./management.interface";

export class BackendService implements Management{
    getColumns(): string[] {
        throw new Error("Method not implemented.");
    }
    public servicioID: number;
    public tipo: string;
    public descripcion: string;
    public precio: number;
    public esPension: boolean;
    public img_path: string;
    public isSelected: boolean = false;

    public static parse(item: object): BackendService {
        let newObject = new BackendService();
        newObject.servicioID = item['servicioID'];
        newObject.tipo = item['tipo'];
        newObject.descripcion = item['descripcion'];
        newObject.precio = item['precio'];
        newObject.esPension = item['esPension'];
        newObject.img_path = item['img_path'];

        return newObject;
    }

    public getJSON(hotel: Hotel): object {

        return {
            "servicioID" : this.servicioID,
            "tipo" : this.tipo,
            "descripcion" : this.descripcion,
            "precio" : this.precio,
            "esPension" : this.esPension,
            "img_path" : this.img_path,
            "hotelID":hotel.getJSON()
        }
    }
}