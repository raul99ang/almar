
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {AZ_TR_ROLESModel} from '../models/AZ_TR_ROLES.model';
@Injectable({
  providedIn: 'root'
})
export class AZ_TR_ROLESService {

  BAFUrl: string = `${environment.baseUrl}/AZ_TR_ROLES`;
  constructor(private readonly http: HttpClient) {}

  getAZ_TR_ROLESById(Id_roles: number) {
    return lastValueFrom(this.http.get<AZ_TR_ROLESModel>(`${this.BAFUrl}/${Id_roles}`));
  }

  getAZ_TR_ROLES(): Promise<AZ_TR_ROLESModel[]> {
    return lastValueFrom(this.http.get<AZ_TR_ROLESModel[]>(`${this.BAFUrl}`));
  }

  postAZ_TR_ROLES(az_tr_roles: AZ_TR_ROLESModel) {
    
    return lastValueFrom(this.http.post(`${this.BAFUrl}`, az_tr_roles));
  }
  putAZ_TR_ROLES(az_tr_roles: AZ_TR_ROLESModel, Id_roles: number) { 
    return lastValueFrom(this.http.put(`${this.BAFUrl}`, az_tr_roles));
  }

  deleteAZ_TR_ROLES(Id_roles: any) {
    return lastValueFrom(this.http.delete(`${this.BAFUrl}/${Id_roles}`));
  }
}