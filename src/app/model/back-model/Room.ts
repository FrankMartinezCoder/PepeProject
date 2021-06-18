export class Room {
    public habitacionID: number;
    public descripcion: string;
    public numHabitacion: number;
    public img_path: string;
    public ocupantes: number;
    public tipoHabitacion: string;
    public precioHabitacionTotal: number;
    public precioOcupante: number;

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

        return newObject;
    }
}
