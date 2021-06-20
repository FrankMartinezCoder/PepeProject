import { Hotel } from "./Hotel";
import { Management } from "./management.interface";

export class Room implements Management{
    getField(id: number) {
        throw new Error("Method not implemented.");
    }
    getFields(): string[] {
        throw new Error("Method not implemented.");
    }
    get(columId: number): any {
        switch (columId) {
            case 0:
                return this.tipoHabitacion;
            case 1:
                return this.numHabitacion;
        }
    }
    getColumns(): string[] {
        return ["Tipo Habitacion","Numero Habitacion","Precio",""];
    }
    public habitacionID: number;
    public descripcion: string;
    public numHabitacion: number;
    public img_path: string;
    public ocupantes: number;
    public tipoHabitacion: string;
    public precioHabitacionTotal: number;
    public precioOcupante: number;
    public hotelID:Hotel;

    public static parse(item:object){
        let newObject = new Room();

        newObject.habitacionID = item['habitacionID'];
        newObject.descripcion = item['descripcion'];
        newObject.numHabitacion = item['numHabitacion'];
        newObject.img_path = item['img_path'];
        newObject.ocupantes = item['ocupantes'];
        newObject.tipoHabitacion = item['tipoHabitacion'];
        newObject.precioHabitacionTotal = item['precioHabitacionTotal'];
        newObject.precioOcupante = item['precioOcupante'];
        newObject.hotelID = Hotel.parse(item['hotelID']);
        return newObject;
    }
}
