import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EspecificacionesTecnicasModel } from '../models/EspecificacionesTecnicas.model';
import { EspecificacionesTecnicasService } from '../services/EspecificacionesTecnicas.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-EspecificacionesTecnicas-detail',
  templateUrl: './EspecificacionesTecnicas-detail.component.html',
  styleUrls: ['./EspecificacionesTecnicas-detail.component.css']
})
export class EspecificacionesTecnicasDetailComponent implements OnInit {
@Input() id: number = 0;
        isNew: boolean = false;

        especificacionestecnicas: EspecificacionesTecnicasModel = new EspecificacionesTecnicasModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly EspecificacionesTecnicasService: EspecificacionesTecnicasService) { }

  ngOnInit() : void {
    
    this.isNew = !this.id;

console.log(this.isNew);
    if(!this.isNew){
      this.EspecificacionesTecnicasService.getEspecificacionesTecnicasById(this.id)
        .then((response: any) => {
          this.especificacionestecnicas = response.cont.EspecificacionesTecnicas;
        })
        .catch(() => {});
    }
  }

  submitEspecificacionesTecnicas(forma: NgForm){
    if (this.isNew)
    {
        this.EspecificacionesTecnicasService.postEspecificacionesTecnicas(this.especificacionestecnicas)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "EspecificacionesTecnicas has been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register EspecificacionesTecnicas"
            });
        });
        } else
        {

            this.EspecificacionesTecnicasService.putEspecificacionesTecnicas(this.especificacionestecnicas, this.id)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "EspecificacionesTecnicas has been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update EspecificacionesTecnicas"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    