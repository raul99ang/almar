import { Component, OnInit } from '@angular/core';
import { DesarrolloModel } from '../models/Desarrollo.model';
import Swal from 'sweetalert2';
import { DesarrolloService } from '../services/Desarrollo.service';

@Component({
  selector: 'app-Desarrollo',
  templateUrl: './Desarrollo.component.html',
  styleUrls: ['./Desarrollo.component.css']
})
export class DesarrolloComponent implements OnInit {

mostrarActualizar: boolean = false;
  desarrolloAll: DesarrolloModel[] = [];
  id: number= 0;
  busqueda: string = '';
 searchTerm: string = '';
  searchText: string = '';
desarrollo: any[]=[];

  constructor(private readonly DesarrolloService: DesarrolloService) { }

  async ngOnInit() {
    this.desarrolloAll = await this.DesarrolloService.getDesarrollo();
  }

  obtenerDesarrollo() {
    this.DesarrolloService.getDesarrollo()
    .then((response: any) => {
      this.desarrolloAll = response.cont.desarrolloAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idDesarrollo: any) {
    this.id = idDesarrollo;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.id;
            this.obtenerDesarrollo();
        }

        eliminar(desarrollo: DesarrolloModel)
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
                this.DesarrolloService.deleteDesarrollo(desarrollo.id_desarrollo)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerDesarrollo();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating Desarrollo."
          });
        })
      }
    })
  }


buscar(){
if (this.searchText === '') {
      this.desarrolloAll = this.desarrollo;
    } else {
      // Filtra los empleados según el texto de búsqueda
      this.desarrolloAll = this.desarrollo.filter(desarrollo => 
        desarrollo.id_desarrollo.toLowerCase().includes(this.searchText.toLowerCase())
        )}
      }
    }