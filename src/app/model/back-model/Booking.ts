import { Occupant } from "./Occupant";
import { Room } from "./Room";
import { Valoration } from "./Valoration";

export class Booking {
    public reservaID:number;
    public bookingDate: Date;
    public entryDate:Date;
    public endingDate:Date;
    public cancelledDate:Date;
    public room:Room;
    public occupants:number;
    public valoration:number;
    public isCancelled:boolean = false;
    public basePrice:number; // room price * num ocupantes
    public totalPrice:number; // basePrice*days + services (price * occupant)

    public constructor() {}


    public setEntryDate(params:Date):void {
        params.setHours(12);
        params.setMinutes(0);
        this.entryDate = params;
    }

    public setEndingDate(params:Date):void {
        params.setHours(10);
        params.setMinutes(0);
        this.endingDate = params;
    }
}