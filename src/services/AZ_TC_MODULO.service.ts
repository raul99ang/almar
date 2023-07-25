
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {AZ_TC_MODULOModel} from '../models/AZ_TC_MODULO.model';
@Injectable({
  providedIn: 'root'
})
export class AZ_TC_MODULOService {

  BAFUrl: string = `${environment.baseUrl}/AZ_TC_MODULO`;
  constructor(private readonly http: HttpClient) {}

  getAZ_TC_MODULOById(Id_modulo: number) {
    return lastValueFrom(this.http.get<AZ_TC_MODULOModel>(`${this.BAFUrl}/${Id_modulo}`));
  }

  getAZ_TC_MODULO(): Promise<AZ_TC_MODULOModel[]> {
    return lastValueFrom(this.http.get<AZ_TC_MODULOModel[]>(`${this.BAFUrl}`));
  }

  postAZ_TC_MODULO(az_tc_modulo: AZ_TC_MODULOModel) {
    
    return lastValueFrom(this.http.post(`${this.BAFUrl}`, az_tc_modulo));
  }
  putAZ_TC_MODULO(az_tc_modulo: AZ_TC_MODULOModel, Id_modulo: number) { 
    return lastValueFrom(this.http.put(`${this.BAFUrl}`, az_tc_modulo));
  }

  deleteAZ_TC_MODULO(Id_modulo: any) {
    return lastValueFrom(this.http.delete(`${this.BAFUrl}/${Id_modulo}`));
  }
}