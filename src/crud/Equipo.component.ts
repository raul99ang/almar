import { Component, OnInit } from '@angular/core';
import { EquipoModel } from '../models/Equipo.model';
import Swal from 'sweetalert2';
import { EquipoService } from '../services/Equipo.service';

@Component({
  selector: 'app-Equipo',
  templateUrl: './Equipo.component.html',
  styleUrls: ['./Equipo.component.css']
})
export class EquipoComponent implements OnInit {

mostrarActualizar: boolean = false;
  equipoAll: EquipoModel[] = [];
  id: number= 0;
  busqueda: string = '';
 searchTerm: string = '';
  searchText: string = '';
equipo: any[]=[];

  constructor(private readonly EquipoService: EquipoService) { }

  async ngOnInit() {
    this.equipoAll = await this.EquipoService.getEquipo();
  }

  obtenerEquipo() {
    this.EquipoService.getEquipo()
    .then((response: any) => {
      this.equipoAll = response.cont.equipoAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idEquipo: any) {
    this.id = idEquipo;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.id;
            this.obtenerEquipo();
        }

        eliminar(equipo: EquipoModel)
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
                this.EquipoService.deleteEquipo(equipo.id_responsable)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerEquipo();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating Equipo."
          });
        })
      }
    })
  }


buscar(){
if (this.searchText === '') {
      this.equipoAll = this.equipo;
    } else {
      // Filtra los empleados según el texto de búsqueda
      this.equipoAll = this.equipo.filter(equipo => 
        equipo.id_responsable.toLowerCase().includes(this.searchText.toLowerCase())
        )}
      }
    }