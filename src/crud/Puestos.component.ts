import { Component, OnInit } from '@angular/core';
import { PuestosModel } from '../models/Puestos.model';
import Swal from 'sweetalert2';
import { PuestosService } from '../services/Puestos.service';

@Component({
  selector: 'app-Puestos',
  templateUrl: './Puestos.component.html',
  styleUrls: ['./Puestos.component.css']
})
export class PuestosComponent implements OnInit {

mostrarActualizar: boolean = false;
  puestosAll: PuestosModel[] = [];
  id: number= 0;
  busqueda: string = '';
 searchTerm: string = '';
  searchText: string = '';
puestos: any[]=[];

  constructor(private readonly PuestosService: PuestosService) { }

  async ngOnInit() {
    this.puestosAll = await this.PuestosService.getPuestos();
  }

  obtenerPuestos() {
    this.PuestosService.getPuestos()
    .then((response: any) => {
      this.puestosAll = response.cont.puestosAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idPuestos: any) {
    this.id = idPuestos;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.id;
            this.obtenerPuestos();
        }

        eliminar(puestos: PuestosModel)
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
                this.PuestosService.deletePuestos(puestos.id_puesto)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerPuestos();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating Puestos."
          });
        })
      }
    })
  }


buscar(){
if (this.searchText === '') {
      this.puestosAll = this.puestos;
    } else {
      // Filtra los empleados según el texto de búsqueda
      this.puestosAll = this.puestos.filter(puestos => 
        puestos.id_puesto.toLowerCase().includes(this.searchText.toLowerCase())
        )}
      }
    }