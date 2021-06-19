import { title } from "process";

export class Service {
    public id: number;
    public title: string;
    public img: string;
    public isActive: boolean = false;
    public isVisible: boolean;

    constructor(id: number, title: string, img: string, isVisible: boolean = true) {
        this.id = id;
        this.title = title;
        this.img = img;
        this.isVisible = isVisible;
    }

    public static getTitleCombined(services: Array<Service>): string {
        
        let temporal = new Array<Service>(services.length);
        let titleCombined = "";
        let lastServiceId = null;
        for (let i = 0; i < services.length; i++) {
            if (services[i].isActive) {
                temporal[i] = services[i];
                lastServiceId = services[i].id;
            }
        }
        if (temporal.filter(e=>e&&e.id).length == 1) {
            titleCombined = temporal.find(e => e!=null).title;
        }
        else if (temporal.filter(e=>e.id).length > 1) {
            for (let i = 0; i < services.length; i++) {
                if (services[i].isActive && services[i].id != lastServiceId) {
                    if (!titleCombined)
                        titleCombined = (services[i].title + " + ");
                    else
                        titleCombined += (services[i].title + " + ");
                }
            }
            
            titleCombined += temporal.find(e => e&&e.id==lastServiceId).title;
        }

        return titleCombined;
    }
}