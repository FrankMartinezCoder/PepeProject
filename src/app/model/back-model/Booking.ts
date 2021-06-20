import { Room } from "./Room";

export class Booking {
    public reservaID:number;
    public bookingDate: Date;
    public entryDate:Date;
    public endingDate:Date;
    public cancelledDate:Date;
    public habitacionID:Room;
    public occupants:number;
    public valoration:number;
    public esCancelacion:boolean = false;
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