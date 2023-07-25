
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {DatosProyectoModel} from '../models/DatosProyecto.model';
@Injectable({
  providedIn: 'root'
})
export class DatosProyectoService {

  BAFUrl: string = `${environment.baseUrl}/DatosProyecto`;
  constructor(private readonly http: HttpClient) {}

  getDatosProyectoById(id_proyecto: number) {
    return lastValueFrom(this.http.get<DatosProyectoModel>(`${this.BAFUrl}/${id_proyecto}`));
  }

  getDatosProyecto(): Promise<DatosProyectoModel[]> {
    return lastValueFrom(this.http.get<DatosProyectoModel[]>(`${this.BAFUrl}`));
  }

  postDatosProyecto(datosproyecto: DatosProyectoModel) {
    
    return lastValueFrom(this.http.post(`${this.BAFUrl}`, datosproyecto));
  }
  putDatosProyecto(datosproyecto: DatosProyectoModel, id_proyecto: number) { 
    return lastValueFrom(this.http.put(`${this.BAFUrl}`, datosproyecto));
  }

  deleteDatosProyecto(id_proyecto: any) {
    return lastValueFrom(this.http.delete(`${this.BAFUrl}/${id_proyecto}`));
  }
}