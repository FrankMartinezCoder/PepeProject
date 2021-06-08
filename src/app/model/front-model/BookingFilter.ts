export class BookingFilter {
    public dateIn: Date;
    public dateOut: Date;
    public minPrice: number = 0;
    public maxPrice: number = 0;
    public numOccupant: number = 1;

    public clear(): void {
        this.dateIn = null;
        this.dateOut = null;
        this.minPrice = 0;
        this.maxPrice = 0;
        this.numOccupant = 1;
    }
}