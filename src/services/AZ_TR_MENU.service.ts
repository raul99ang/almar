
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {AZ_TR_MENUModel} from '../models/AZ_TR_MENU.model';
@Injectable({
  providedIn: 'root'
})
export class AZ_TR_MENUService {

  BAFUrl: string = `${environment.baseUrl}/AZ_TR_MENU`;
  constructor(private readonly http: HttpClient) {}

  getAZ_TR_MENUById(Id_menu: number) {
    return lastValueFrom(this.http.get<AZ_TR_MENUModel>(`${this.BAFUrl}/${Id_menu}`));
  }

  getAZ_TR_MENU(): Promise<AZ_TR_MENUModel[]> {
    return lastValueFrom(this.http.get<AZ_TR_MENUModel[]>(`${this.BAFUrl}`));
  }

  postAZ_TR_MENU(az_tr_menu: AZ_TR_MENUModel) {
    
    return lastValueFrom(this.http.post(`${this.BAFUrl}`, az_tr_menu));
  }
  putAZ_TR_MENU(az_tr_menu: AZ_TR_MENUModel, Id_menu: number) { 
    return lastValueFrom(this.http.put(`${this.BAFUrl}`, az_tr_menu));
  }

  deleteAZ_TR_MENU(Id_menu: any) {
    return lastValueFrom(this.http.delete(`${this.BAFUrl}/${Id_menu}`));
  }
}