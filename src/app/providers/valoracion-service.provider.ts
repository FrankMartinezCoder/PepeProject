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
            // newParam.servicioID = param.servicioID;

            params[i] = newParam;
        }

        return this.valoracionesService.reservaServicios(JSON.stringify(params));
      }
}

class ServicioContratado {
    public servicioContratadoID:number;
    public denominacion
    public unidades
    public precio
    public reservaID:object = null;
    public servicioID:BackendService;

}