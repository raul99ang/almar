
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {AZ_TR_seccionModel} from '../models/AZ_TR_seccion.model';
@Injectable({
  providedIn: 'root'
})
export class AZ_TR_seccionService {

  BAFUrl: string = `${environment.baseUrl}/AZ_TR_seccion`;
  constructor(private readonly http: HttpClient) {}

  getAZ_TR_seccionById(Id_seccion: number) {
    return lastValueFrom(this.http.get<AZ_TR_seccionModel>(`${this.BAFUrl}/${Id_seccion}`));
  }

  getAZ_TR_seccion(): Promise<AZ_TR_seccionModel[]> {
    return lastValueFrom(this.http.get<AZ_TR_seccionModel[]>(`${this.BAFUrl}`));
  }

  postAZ_TR_seccion(az_tr_seccion: AZ_TR_seccionModel) {
    
    return lastValueFrom(this.http.post(`${this.BAFUrl}`, az_tr_seccion));
  }
  putAZ_TR_seccion(az_tr_seccion: AZ_TR_seccionModel, Id_seccion: number) { 
    return lastValueFrom(this.http.put(`${this.BAFUrl}`, az_tr_seccion));
  }

  deleteAZ_TR_seccion(Id_seccion: any) {
    return lastValueFrom(this.http.delete(`${this.BAFUrl}/${Id_seccion}`));
  }
}