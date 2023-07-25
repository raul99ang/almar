
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {EspecificacionesTecnicasModel} from '../models/EspecificacionesTecnicas.model';
@Injectable({
  providedIn: 'root'
})
export class EspecificacionesTecnicasService {

  BAFUrl: string = `${environment.baseUrl}/EspecificacionesTecnicas`;
  constructor(private readonly http: HttpClient) {}

  getEspecificacionesTecnicasById(id_especificacion: number) {
    return lastValueFrom(this.http.get<EspecificacionesTecnicasModel>(`${this.BAFUrl}/${id_especificacion}`));
  }

  getEspecificacionesTecnicas(): Promise<EspecificacionesTecnicasModel[]> {
    return lastValueFrom(this.http.get<EspecificacionesTecnicasModel[]>(`${this.BAFUrl}`));
  }

  postEspecificacionesTecnicas(especificacionestecnicas: EspecificacionesTecnicasModel) {
    
    return lastValueFrom(this.http.post(`${this.BAFUrl}`, especificacionestecnicas));
  }
  putEspecificacionesTecnicas(especificacionestecnicas: EspecificacionesTecnicasModel, id_especificacion: number) { 
    return lastValueFrom(this.http.put(`${this.BAFUrl}`, especificacionestecnicas));
  }

  deleteEspecificacionesTecnicas(id_especificacion: any) {
    return lastValueFrom(this.http.delete(`${this.BAFUrl}/${id_especificacion}`));
  }
}