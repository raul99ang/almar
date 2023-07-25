
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {DesarrolloModel} from '../models/Desarrollo.model';
@Injectable({
  providedIn: 'root'
})
export class DesarrolloService {

  BAFUrl: string = `${environment.baseUrl}/Desarrollo`;
  constructor(private readonly http: HttpClient) {}

  getDesarrolloById(id_desarrollo: number) {
    return lastValueFrom(this.http.get<DesarrolloModel>(`${this.BAFUrl}/${id_desarrollo}`));
  }

  getDesarrollo(): Promise<DesarrolloModel[]> {
    return lastValueFrom(this.http.get<DesarrolloModel[]>(`${this.BAFUrl}`));
  }

  postDesarrollo(desarrollo: DesarrolloModel) {
    
    return lastValueFrom(this.http.post(`${this.BAFUrl}`, desarrollo));
  }
  putDesarrollo(desarrollo: DesarrolloModel, id_desarrollo: number) { 
    return lastValueFrom(this.http.put(`${this.BAFUrl}`, desarrollo));
  }

  deleteDesarrollo(id_desarrollo: any) {
    return lastValueFrom(this.http.delete(`${this.BAFUrl}/${id_desarrollo}`));
  }
}