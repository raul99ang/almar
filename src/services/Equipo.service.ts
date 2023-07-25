
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {EquipoModel} from '../models/Equipo.model';
@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  BAFUrl: string = `${environment.baseUrl}/Equipo`;
  constructor(private readonly http: HttpClient) {}

  getEquipoById(id_responsable: number) {
    return lastValueFrom(this.http.get<EquipoModel>(`${this.BAFUrl}/${id_responsable}`));
  }

  getEquipo(): Promise<EquipoModel[]> {
    return lastValueFrom(this.http.get<EquipoModel[]>(`${this.BAFUrl}`));
  }

  postEquipo(equipo: EquipoModel) {
    
    return lastValueFrom(this.http.post(`${this.BAFUrl}`, equipo));
  }
  putEquipo(equipo: EquipoModel, id_responsable: number) { 
    return lastValueFrom(this.http.put(`${this.BAFUrl}`, equipo));
  }

  deleteEquipo(id_responsable: any) {
    return lastValueFrom(this.http.delete(`${this.BAFUrl}/${id_responsable}`));
  }
}