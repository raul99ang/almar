
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {AZ_TC_PERFILModel} from '../models/AZ_TC_PERFIL.model';
@Injectable({
  providedIn: 'root'
})
export class AZ_TC_PERFILService {

  BAFUrl: string = `${environment.baseUrl}/AZ_TC_PERFIL`;
  constructor(private readonly http: HttpClient) {}

  getAZ_TC_PERFILById(Id_perfil: number) {
    return lastValueFrom(this.http.get<AZ_TC_PERFILModel>(`${this.BAFUrl}/${Id_perfil}`));
  }

  getAZ_TC_PERFIL(): Promise<AZ_TC_PERFILModel[]> {
    return lastValueFrom(this.http.get<AZ_TC_PERFILModel[]>(`${this.BAFUrl}`));
  }

  postAZ_TC_PERFIL(az_tc_perfil: AZ_TC_PERFILModel) {
    
    return lastValueFrom(this.http.post(`${this.BAFUrl}`, az_tc_perfil));
  }
  putAZ_TC_PERFIL(az_tc_perfil: AZ_TC_PERFILModel, Id_perfil: number) { 
    return lastValueFrom(this.http.put(`${this.BAFUrl}`, az_tc_perfil));
  }

  deleteAZ_TC_PERFIL(Id_perfil: any) {
    return lastValueFrom(this.http.delete(`${this.BAFUrl}/${Id_perfil}`));
  }
}