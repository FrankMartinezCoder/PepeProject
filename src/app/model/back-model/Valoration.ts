import { Booking } from "./back-model/Booking";
import { User } from "./User";

export class Valoration {
    private id:number;
    private date:Date;
    private user:User;
    private booking:Booking;
    private comment:string;
    private rate:number;
}