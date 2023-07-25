import { Component, OnInit } from '@angular/core';
import { RequerimientosProyectoModel } from '../models/RequerimientosProyecto.model';
import Swal from 'sweetalert2';
import { RequerimientosProyectoService } from '../services/RequerimientosProyecto.service';

@Component({
  selector: 'app-RequerimientosProyecto',
  templateUrl: './RequerimientosProyecto.component.html',
  styleUrls: ['./RequerimientosProyecto.component.css']
})
export class RequerimientosProyectoComponent implements OnInit {

mostrarActualizar: boolean = false;
  requerimientosproyectoAll: RequerimientosProyectoModel[] = [];
  id: number= 0;
  busqueda: string = '';
 searchTerm: string = '';
  searchText: string = '';
requerimientosproyecto: any[]=[];

  constructor(private readonly RequerimientosProyectoService: RequerimientosProyectoService) { }

  async ngOnInit() {
    this.requerimientosproyectoAll = await this.RequerimientosProyectoService.getRequerimientosProyecto();
  }

  obtenerRequerimientosProyecto() {
    this.RequerimientosProyectoService.getRequerimientosProyecto()
    .then((response: any) => {
      this.requerimientosproyectoAll = response.cont.requerimientosproyectoAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idRequerimientosProyecto: any) {
    this.id = idRequerimientosProyecto;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.id;
            this.obtenerRequerimientosProyecto();
        }

        eliminar(requerimientosproyecto: RequerimientosProyectoModel)
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
                this.RequerimientosProyectoService.deleteRequerimientosProyecto(requerimientosproyecto.id_requerimiento)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerRequerimientosProyecto();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating RequerimientosProyecto."
          });
        })
      }
    })
  }


buscar(){
if (this.searchText === '') {
      this.requerimientosproyectoAll = this.requerimientosproyecto;
    } else {
      // Filtra los empleados según el texto de búsqueda
      this.requerimientosproyectoAll = this.requerimientosproyecto.filter(requerimientosproyecto => 
        requerimientosproyecto.id_requerimiento.toLowerCase().includes(this.searchText.toLowerCase())
        )}
      }
    }