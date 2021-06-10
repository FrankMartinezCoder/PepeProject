import { UserType } from "./UserType";

export class User {
    public id: number;
    public name: string;
    public surname: string;
    public email: string;
    public password: string;
    public birthDate: Date;
    public userType: UserType;


    public static validate(user: User): boolean {
        if (!user)
            return false;

        if (!user.id || user.id < 0 ||
            !user.name || !user.email || !user.surname)
            return false;


        return true;
    }

    public static parse(object: any): User {
        let userTemp: User = new User();
        try {
            userTemp.id = object.id;
            userTemp.name = object.name;
            userTemp.surname = object.surname;
            userTemp.email = object.email;
            userTemp.password = object.password;
            userTemp.birthDate = object.birthDate;
            userTemp.userType = object.userType;
        } catch (error) {
            userTemp = null;
        }

        return userTemp;
    }
}