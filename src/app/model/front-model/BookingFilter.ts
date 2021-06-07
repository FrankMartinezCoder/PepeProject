export class BookingFilter {
    public dateIn: Date;
    public dateOut: Date;
    public minPrice: number;
    public maxPrice: number;
    public numOccupant: number;

    public clear(): void {
        this.dateIn = null;
        this.dateOut = null;
        this.minPrice = 0;
        this.maxPrice = 0;
        this.numOccupant = 1;
    }
}