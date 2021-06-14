export class User {
    public usuarioID: number;
    public nombre: string;
    public apellidos: string;
    public email: string;
    public password: string;
    public birthDate: Date;
    public esAdmin: boolean;


    public static valusuarioIDate(user: User): boolean {
        if (!user)
            return false;

        if (!user.usuarioID || user.usuarioID < 0 ||
            !user.nombre || !user.email || !user.apellidos)
            return false;


        return true;
    }

    public static parse(object: any): User {
        let userTemp: User = new User();
        try {
            userTemp.usuarioID = object.usuarioID;
            userTemp.nombre = object.nombre;
            userTemp.apellidos = object.apellidos;
            userTemp.email = object.email;
            userTemp.password = object.password;
            userTemp.birthDate = object.birthDate;
            userTemp.esAdmin = object.esAdmin;
        } catch (error) {
            userTemp = null;
        }

        return userTemp;
    }
}