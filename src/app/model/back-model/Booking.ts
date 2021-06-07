import { Occupant } from "./Occupant";
import { Room } from "./Room";
import { Valoration } from "./Valoration";

export class Booking {
    private id:number;
    private bookingDate: Date;
    private entryDate:Date;
    private endingDate:Date;
    private cancelledDate:Date;
    private room:Room;
    private occupants:Occupant[];
    private valoration:Valoration;
    private isCancelled:boolean = false;
    private basePrice:number; // room price * num ocupantes
    private totalPrice:number; // basePrice*days + services (price * occupant)

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