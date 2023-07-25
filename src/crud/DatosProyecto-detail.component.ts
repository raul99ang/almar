import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatosProyectoModel } from '../models/DatosProyecto.model';
import { DatosProyectoService } from '../services/DatosProyecto.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-DatosProyecto-detail',
  templateUrl: './DatosProyecto-detail.component.html',
  styleUrls: ['./DatosProyecto-detail.component.css']
})
export class DatosProyectoDetailComponent implements OnInit {
@Input() id: number = 0;
        isNew: boolean = false;

        datosproyecto: DatosProyectoModel = new DatosProyectoModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly DatosProyectoService: DatosProyectoService) { }

  ngOnInit() : void {
    
    this.isNew = !this.id;

console.log(this.isNew);
    if(!this.isNew){
      this.DatosProyectoService.getDatosProyectoById(this.id)
        .then((response: any) => {
          this.datosproyecto = response.cont.DatosProyecto;
        })
        .catch(() => {});
    }
  }

  submitDatosProyecto(forma: NgForm){
    if (this.isNew)
    {
        this.DatosProyectoService.postDatosProyecto(this.datosproyecto)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "DatosProyecto has been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register DatosProyecto"
            });
        });
        } else
        {

            this.DatosProyectoService.putDatosProyecto(this.datosproyecto, this.id)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "DatosProyecto has been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update DatosProyecto"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    