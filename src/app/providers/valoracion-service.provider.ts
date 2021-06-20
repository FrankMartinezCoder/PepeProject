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

    public getServicesFromHotelId(parameters: BackendService[], hotel:Hotel): Observable<void> {
        let params = new Array<ServicioContratado>(parameters.length);

        for (let i = 0; i < parameters.length; i++) {
            const param = parameters[i];
            let newParam = new ServicioContratado();
            newParam.servicioID = param;

            newParam.denominacion = param.tipo;
            
            params[i] = newParam;
        }

        return this.valoracionesService.reservaServicios(JSON.stringify(params));
      }
}

class ServicioContratado {
    public servicioContratadoID:number;
    public denominacion:string;
    public unidades:number;
    public precio:number;
    public reservaID:object = null;
    public servicioID:BackendService;

}