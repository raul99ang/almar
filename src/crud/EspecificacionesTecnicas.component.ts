import { Component, OnInit } from '@angular/core';
import { EspecificacionesTecnicasModel } from '../models/EspecificacionesTecnicas.model';
import Swal from 'sweetalert2';
import { EspecificacionesTecnicasService } from '../services/EspecificacionesTecnicas.service';

@Component({
  selector: 'app-EspecificacionesTecnicas',
  templateUrl: './EspecificacionesTecnicas.component.html',
  styleUrls: ['./EspecificacionesTecnicas.component.css']
})
export class EspecificacionesTecnicasComponent implements OnInit {

mostrarActualizar: boolean = false;
  especificacionestecnicasAll: EspecificacionesTecnicasModel[] = [];
  id: number= 0;
  busqueda: string = '';
 searchTerm: string = '';
  searchText: string = '';
especificacionestecnicas: any[]=[];

  constructor(private readonly EspecificacionesTecnicasService: EspecificacionesTecnicasService) { }

  async ngOnInit() {
    this.especificacionestecnicasAll = await this.EspecificacionesTecnicasService.getEspecificacionesTecnicas();
  }

  obtenerEspecificacionesTecnicas() {
    this.EspecificacionesTecnicasService.getEspecificacionesTecnicas()
    .then((response: any) => {
      this.especificacionestecnicasAll = response.cont.especificacionestecnicasAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idEspecificacionesTecnicas: any) {
    this.id = idEspecificacionesTecnicas;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.id;
            this.obtenerEspecificacionesTecnicas();
        }

        eliminar(especificacionestecnicas: EspecificacionesTecnicasModel)
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
                this.EspecificacionesTecnicasService.deleteEspecificacionesTecnicas(especificacionestecnicas.id_especificacion)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerEspecificacionesTecnicas();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating EspecificacionesTecnicas."
          });
        })
      }
    })
  }


buscar(){
if (this.searchText === '') {
      this.especificacionestecnicasAll = this.especificacionestecnicas;
    } else {
      // Filtra los empleados según el texto de búsqueda
      this.especificacionestecnicasAll = this.especificacionestecnicas.filter(especificacionestecnicas => 
        especificacionestecnicas.id_especificacion.toLowerCase().includes(this.searchText.toLowerCase())
        )}
      }
    }