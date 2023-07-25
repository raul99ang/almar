import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PuestosModel } from '../models/Puestos.model';
import { PuestosService } from '../services/Puestos.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-Puestos-detail',
  templateUrl: './Puestos-detail.component.html',
  styleUrls: ['./Puestos-detail.component.css']
})
export class PuestosDetailComponent implements OnInit {
@Input() id: number = 0;
        isNew: boolean = false;

        puestos: PuestosModel = new PuestosModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly PuestosService: PuestosService) { }

  ngOnInit() : void {
    
    this.isNew = !this.id;

console.log(this.isNew);
    if(!this.isNew){
      this.PuestosService.getPuestosById(this.id)
        .then((response: any) => {
          this.puestos = response.cont.Puestos;
        })
        .catch(() => {});
    }
  }

  submitPuestos(forma: NgForm){
    if (this.isNew)
    {
        this.PuestosService.postPuestos(this.puestos)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "Puestos has been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register Puestos"
            });
        });
        } else
        {

            this.PuestosService.putPuestos(this.puestos, this.id)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "Puestos has been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update Puestos"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    