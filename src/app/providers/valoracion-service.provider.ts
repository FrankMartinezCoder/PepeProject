import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BackendService } from "../model/back-model/BackendService";
import { Hotel } from "../model/back-model/Hotel";
import { ValoracionesService } from "../services/valoracion-service.service";

@Injectable({
    providedIn: 'root'
})
export class ValoracionProvider {

    constructor(private valoracionesService:ValoracionesService) {}

    public getServicesFromHotelId(parameters: BackendService[], hotel:Hotel, unidades:number): Observable<string> {
        let params = new Array<ServicioContratado>(parameters.length);

        for (let i = 0; i < parameters.length; i++) {
            const param = parameters[i];
            let newParam = new ServicioContratado();
            
            newParam.denominacion = param.tipo;
            newParam.unidades = (unidades*param.precio);
            newParam.precio = param.precio;
            newParam.servicioID = param.servicioID;
            params[i] = newParam;
        }
        console.log("params",params,"params JSON",JSON.stringify(params));
        
        return this.valoracionesService.reservaServicios(JSON.stringify(params));
      }
}

class ServicioContratado {
    public servicioContratadoID:number = 0;
    public denominacion:string;
    public unidades:number;
    public precio:number;
    public reservaID:number = 0;
    public servicioID:number;

}