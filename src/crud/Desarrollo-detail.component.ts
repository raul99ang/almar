import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DesarrolloModel } from '../models/Desarrollo.model';
import { DesarrolloService } from '../services/Desarrollo.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-Desarrollo-detail',
  templateUrl: './Desarrollo-detail.component.html',
  styleUrls: ['./Desarrollo-detail.component.css']
})
export class DesarrolloDetailComponent implements OnInit {
@Input() id: number = 0;
        isNew: boolean = false;

        desarrollo: DesarrolloModel = new DesarrolloModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly DesarrolloService: DesarrolloService) { }

  ngOnInit() : void {
    
    this.isNew = !this.id;

console.log(this.isNew);
    if(!this.isNew){
      this.DesarrolloService.getDesarrolloById(this.id)
        .then((response: any) => {
          this.desarrollo = response.cont.Desarrollo;
        })
        .catch(() => {});
    }
  }

  submitDesarrollo(forma: NgForm){
    if (this.isNew)
    {
        this.DesarrolloService.postDesarrollo(this.desarrollo)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "Desarrollo has been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register Desarrollo"
            });
        });
        } else
        {

            this.DesarrolloService.putDesarrollo(this.desarrollo, this.id)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "Desarrollo has been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update Desarrollo"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    