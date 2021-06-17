export class Room {
    private habitacionID: number;
    private descripcion: string;
    private numHabitacion: number;
    private img_path: string;
    private ocupantes: number;
    private tipoHabitacion: string;
    private precioHabitacionTotal: number;
    private precioOcupante: number;

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
