import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
    private count:number = 0;
    private observable:Observable<any>;

    constructor() {
        this.observable = of(this.count);
    }

    public sub():Observable<any> {
        return this.observable;
    }

    public throwTrigger():void {
        this.count++;
    }
}