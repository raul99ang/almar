import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RequerimientosProyectoModel } from '../models/RequerimientosProyecto.model';
import { RequerimientosProyectoService } from '../services/RequerimientosProyecto.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-RequerimientosProyecto-detail',
  templateUrl: './RequerimientosProyecto-detail.component.html',
  styleUrls: ['./RequerimientosProyecto-detail.component.css']
})
export class RequerimientosProyectoDetailComponent implements OnInit {
@Input() id: number = 0;
        isNew: boolean = false;

        requerimientosproyecto: RequerimientosProyectoModel = new RequerimientosProyectoModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly RequerimientosProyectoService: RequerimientosProyectoService) { }

  ngOnInit() : void {
    
    this.isNew = !this.id;

console.log(this.isNew);
    if(!this.isNew){
      this.RequerimientosProyectoService.getRequerimientosProyectoById(this.id)
        .then((response: any) => {
          this.requerimientosproyecto = response.cont.RequerimientosProyecto;
        })
        .catch(() => {});
    }
  }

  submitRequerimientosProyecto(forma: NgForm){
    if (this.isNew)
    {
        this.RequerimientosProyectoService.postRequerimientosProyecto(this.requerimientosproyecto)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "RequerimientosProyecto has been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register RequerimientosProyecto"
            });
        });
        } else
        {

            this.RequerimientosProyectoService.putRequerimientosProyecto(this.requerimientosproyecto, this.id)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "RequerimientosProyecto has been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update RequerimientosProyecto"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    