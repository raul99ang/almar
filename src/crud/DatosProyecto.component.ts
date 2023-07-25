import { Component, OnInit } from '@angular/core';
import { DatosProyectoModel } from '../models/DatosProyecto.model';
import Swal from 'sweetalert2';
import { DatosProyectoService } from '../services/DatosProyecto.service';

@Component({
  selector: 'app-DatosProyecto',
  templateUrl: './DatosProyecto.component.html',
  styleUrls: ['./DatosProyecto.component.css']
})
export class DatosProyectoComponent implements OnInit {

mostrarActualizar: boolean = false;
  datosproyectoAll: DatosProyectoModel[] = [];
  id: number= 0;
  busqueda: string = '';
 searchTerm: string = '';
  searchText: string = '';
datosproyecto: any[]=[];

  constructor(private readonly DatosProyectoService: DatosProyectoService) { }

  async ngOnInit() {
    this.datosproyectoAll = await this.DatosProyectoService.getDatosProyecto();
  }

  obtenerDatosProyecto() {
    this.DatosProyectoService.getDatosProyecto()
    .then((response: any) => {
      this.datosproyectoAll = response.cont.datosproyectoAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idDatosProyecto: any) {
    this.id = idDatosProyecto;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.id;
            this.obtenerDatosProyecto();
        }

        eliminar(datosproyecto: DatosProyectoModel)
        {
            Swal.fire({
            icon: "question",
    title: `Are you sure to delete?`,
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: "Cancel"
            }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed)
            {
                this.DatosProyectoService.deleteDatosProyecto(datosproyecto.id_proyecto)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerDatosProyecto();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating DatosProyecto."
          });
        })
      }
    })
  }


buscar(){
if (this.searchText === '') {
      this.datosproyectoAll = this.datosproyecto;
    } else {
      // Filtra los empleados según el texto de búsqueda
      this.datosproyectoAll = this.datosproyecto.filter(datosproyecto => 
        datosproyecto.id_proyecto.toLowerCase().includes(this.searchText.toLowerCase())
        )}
      }
    }