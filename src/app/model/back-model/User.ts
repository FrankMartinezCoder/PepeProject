import { Management } from "./management.interface";

export class User implements Management{
    getFields(): string[] {
        return ['nombre','apellidos','email','password'];
    }
    public get(columId: number):any {
        switch (columId) {
            case 0:
                return this.usuarioID;
                break;
            case 1:
                return this.nombre;
                break;
            case 2:
                return this.apellidos;
                break;            
            case 3:
                return this.email;
                break;                                                
        }
    }

    public getColumns(): string[] {
        return ['ID','Nombre','Apellidos','Email'];
    }
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