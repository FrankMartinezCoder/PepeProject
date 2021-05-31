import { UserType } from "./UserType";

export class User {
    private id:number;
    private name:string;
    private surname:string;
    private email:string;
    private password:string;
    private birthDate:Date;
    private userType:UserType;
}