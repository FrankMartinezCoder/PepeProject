export class BookingFilter {
    public dateIn: Date;
    public dateOut: Date;
    public minPrice: number = 0;
    public maxPrice: number = 0;
    public numOccupant: number = 1;

    constructor() {
        this.clear();
    }

    public clear(): void {
        this.dateIn = new Date();
        this.dateOut = new Date(this.dateIn.setDate(this.dateIn.getDate() + 1));
        this.minPrice = 0;
        this.maxPrice = 0;
        this.numOccupant = 1;
    }
}