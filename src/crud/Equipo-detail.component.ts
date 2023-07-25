import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EquipoModel } from '../models/Equipo.model';
import { EquipoService } from '../services/Equipo.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-Equipo-detail',
  templateUrl: './Equipo-detail.component.html',
  styleUrls: ['./Equipo-detail.component.css']
})
export class EquipoDetailComponent implements OnInit {
@Input() id: number = 0;
        isNew: boolean = false;

        equipo: EquipoModel = new EquipoModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly EquipoService: EquipoService) { }

  ngOnInit() : void {
    
    this.isNew = !this.id;

console.log(this.isNew);
    if(!this.isNew){
      this.EquipoService.getEquipoById(this.id)
        .then((response: any) => {
          this.equipo = response.cont.Equipo;
        })
        .catch(() => {});
    }
  }

  submitEquipo(forma: NgForm){
    if (this.isNew)
    {
        this.EquipoService.postEquipo(this.equipo)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "Equipo has been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register Equipo"
            });
        });
        } else
        {

            this.EquipoService.putEquipo(this.equipo, this.id)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "Equipo has been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update Equipo"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    