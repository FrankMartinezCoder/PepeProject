import { UserType } from "./UserType";

export class User {
    constructor(
        public id:number,
        public name:string,
        public surname:string,
        public email:string,
        public password:string,
        public birthDate:Date,
        public userType:UserType
    ) {}

    public static validate(user:User):boolean {
        if(!user)
            return false;

        if( !user.id || user.id < 0 ||
            !user.name || !user.email || !user.surname)
            return false;


        return true;
    }
}