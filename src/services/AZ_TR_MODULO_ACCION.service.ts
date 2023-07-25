
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {AZ_TR_MODULO_ACCIONModel} from '../models/AZ_TR_MODULO_ACCION.model';
@Injectable({
  providedIn: 'root'
})
export class AZ_TR_MODULO_ACCIONService {

  BAFUrl: string = `${environment.baseUrl}/AZ_TR_MODULO_ACCION`;
  constructor(private readonly http: HttpClient) {}

  getAZ_TR_MODULO_ACCIONById(Id_modulo_accion: number) {
    return lastValueFrom(this.http.get<AZ_TR_MODULO_ACCIONModel>(`${this.BAFUrl}/${Id_modulo_accion}`));
  }

  getAZ_TR_MODULO_ACCION(): Promise<AZ_TR_MODULO_ACCIONModel[]> {
    return lastValueFrom(this.http.get<AZ_TR_MODULO_ACCIONModel[]>(`${this.BAFUrl}`));
  }

  postAZ_TR_MODULO_ACCION(az_tr_modulo_accion: AZ_TR_MODULO_ACCIONModel) {
    
    return lastValueFrom(this.http.post(`${this.BAFUrl}`, az_tr_modulo_accion));
  }
  putAZ_TR_MODULO_ACCION(az_tr_modulo_accion: AZ_TR_MODULO_ACCIONModel, Id_modulo_accion: number) { 
    return lastValueFrom(this.http.put(`${this.BAFUrl}`, az_tr_modulo_accion));
  }

  deleteAZ_TR_MODULO_ACCION(Id_modulo_accion: any) {
    return lastValueFrom(this.http.delete(`${this.BAFUrl}/${Id_modulo_accion}`));
  }
}