import { of } from "rxjs";

export class InputObject<T> {
    public fieldName: string;
    public value: T;
    public isValid: boolean = false;
    public hasModified: boolean = false;
    public errorMessage: string = "";

    constructor(field: string = null, value: T = null) {
        this.fieldName = field;
        of(this.value).subscribe(
            _ => {
                this.hasModified = true;
            }
        );
    }

    public reset(): void {
        this.value = null;
        this.isValid = false;
        this.hasModified = false;
        this.errorMessage = "";
    }
}