
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {RequerimientosProyectoModel} from '../models/RequerimientosProyecto.model';
@Injectable({
  providedIn: 'root'
})
export class RequerimientosProyectoService {

  BAFUrl: string = `${environment.baseUrl}/RequerimientosProyecto`;
  constructor(private readonly http: HttpClient) {}

  getRequerimientosProyectoById(id_requerimiento: number) {
    return lastValueFrom(this.http.get<RequerimientosProyectoModel>(`${this.BAFUrl}/${id_requerimiento}`));
  }

  getRequerimientosProyecto(): Promise<RequerimientosProyectoModel[]> {
    return lastValueFrom(this.http.get<RequerimientosProyectoModel[]>(`${this.BAFUrl}`));
  }

  postRequerimientosProyecto(requerimientosproyecto: RequerimientosProyectoModel) {
    
    return lastValueFrom(this.http.post(`${this.BAFUrl}`, requerimientosproyecto));
  }
  putRequerimientosProyecto(requerimientosproyecto: RequerimientosProyectoModel, id_requerimiento: number) { 
    return lastValueFrom(this.http.put(`${this.BAFUrl}`, requerimientosproyecto));
  }

  deleteRequerimientosProyecto(id_requerimiento: any) {
    return lastValueFrom(this.http.delete(`${this.BAFUrl}/${id_requerimiento}`));
  }
}