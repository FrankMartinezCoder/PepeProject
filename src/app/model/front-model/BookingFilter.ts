export class BookingFilter {
    public fechaEntrada: CustomDate;
    public fechaSalida: CustomDate;
    public precio1: number = 0;
    public precio2: number = 0;
    public ocupantes: number = 1;

    constructor() {
        this.clear();
    }

    public clear(): void {
        this.fechaEntrada = new CustomDate();
        this.fechaSalida = new CustomDate();
        this.fechaSalida.setDate(this.fechaSalida.getDate() + 1);
        this.precio1 = 0;
        this.precio2 = 0;
        this.ocupantes = 1;
    }
    public getData(): object {
        return {
            "fechaEntrada":BookingFilter.dateFormat(this.fechaEntrada,true),
            "fechaSalida":BookingFilter.dateFormat(this.fechaSalida,true),
            "precio1":this.precio1,
            "precio2":this.precio2,
            "ocupantes":this.ocupantes
        }
    }

    public dateFormat():string {
        return "";
    }

    public static dateFormat(date: Date,isToDDBB:boolean):string {
        let output = "";
        if(new RegExp("(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))").test(date.toString())) {
            return date.toString();
        }
        let day = date.getDate().toString();
        day = day.toString().length > 1 ? day : '0' + day;
        let month = (date.getMonth() + 1).toString();
        month = month.toString().length > 1 ? month : '0' + month;
        let year = date.getFullYear();
        
        if(!isToDDBB) {
            output = day+"/"+month+"/"+year;
        }
        else {
            output = year+"-"+month+"-"+day;
        }
        return output;
      }
}

class CustomDate extends Date{

    constructor(date:Date = new Date(Date.now())) {
        super(date);
    }
    
    public getString():string {
        return BookingFilter.dateFormat(this,false);
    }
}