
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {PuestosModel} from '../models/Puestos.model';
@Injectable({
  providedIn: 'root'
})
export class PuestosService {

  BAFUrl: string = `${environment.baseUrl}/Puestos`;
  constructor(private readonly http: HttpClient) {}

  getPuestosById(id_puesto: number) {
    return lastValueFrom(this.http.get<PuestosModel>(`${this.BAFUrl}/${id_puesto}`));
  }

  getPuestos(): Promise<PuestosModel[]> {
    return lastValueFrom(this.http.get<PuestosModel[]>(`${this.BAFUrl}`));
  }

  postPuestos(puestos: PuestosModel) {
    
    return lastValueFrom(this.http.post(`${this.BAFUrl}`, puestos));
  }
  putPuestos(puestos: PuestosModel, id_puesto: number) { 
    return lastValueFrom(this.http.put(`${this.BAFUrl}`, puestos));
  }

  deletePuestos(id_puesto: any) {
    return lastValueFrom(this.http.delete(`${this.BAFUrl}/${id_puesto}`));
  }
}