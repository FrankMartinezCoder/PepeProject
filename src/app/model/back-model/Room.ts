import { Booking } from "./Booking";
import { RoomType } from "./RoomType";

export class Room {
    private id:number;
    private description:string;
    private roomNumber:number;
    private images:string[];
    private roomType:RoomType;
    private price:number;
    private personNumber:number;
    private bookingList:Booking[];
}