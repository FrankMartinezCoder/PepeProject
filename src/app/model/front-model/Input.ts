import { of } from "rxjs";

export class InputObject {
    public value:any;
    public isValid:boolean = false;
    public hasModified:boolean = false;
    public errorMessage:string = "";

    constructor() {
        const _ = this;
        of(this.value).subscribe(
            newValue => {
                _.hasModified = true;
            }
        );
    }

    public reset():void {
        this.value = "";
        this.isValid = false;
        this.hasModified = false;
        this.errorMessage = "";
    }
}