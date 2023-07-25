import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AZ_TC_ACCIONDetailComponent } from 'src/crud/AZ_TC_ACCION-detail.component';
import { AZ_TC_ACCIONComponent } from 'src/crud/AZ_TC_ACCION.component';
import { AZ_TC_MODULODetailComponent } from 'src/crud/AZ_TC_MODULO-detail.component';
import { AZ_TC_MODULOComponent } from 'src/crud/AZ_TC_MODULO.component';
import { AZ_TC_PERFILDetailComponent } from 'src/crud/AZ_TC_PERFIL-detail.component';
import { AZ_TC_PERFILComponent } from 'src/crud/AZ_TC_PERFIL.component';
import { AZ_TR_MENUDetailComponent } from 'src/crud/AZ_TR_MENU-detail.component';
import { AZ_TR_MENUComponent } from 'src/crud/AZ_TR_MENU.component';
import { AZ_TR_MODULO_ACCIONDetailComponent } from 'src/crud/AZ_TR_MODULO_ACCION-detail.component';
import { AZ_TR_MODULO_ACCIONComponent } from 'src/crud/AZ_TR_MODULO_ACCION.component';
import { AZ_TR_PERMISO_PERFILDetailComponent } from 'src/crud/AZ_TR_PERMISO_PERFIL-detail.component';
import { AZ_TR_PERMISO_PERFILComponent } from 'src/crud/AZ_TR_PERMISO_PERFIL.component';
import { AZ_TR_ROLESDetailComponent } from 'src/crud/AZ_TR_ROLES-detail.component';
import { AZ_TR_ROLESComponent } from 'src/crud/AZ_TR_ROLES.component';
import { AZ_TR_seccionDetailComponent } from 'src/crud/AZ_TR_seccion-detail.component';
import { AZ_TR_seccionComponent } from 'src/crud/AZ_TR_seccion.component';
import { AZ_TR_USUARIODetailComponent } from 'src/crud/AZ_TR_USUARIO-detail.component';
import { AZ_TR_USUARIOComponent } from 'src/crud/AZ_TR_USUARIO.component';
import { DatosProyectoDetailComponent } from 'src/crud/DatosProyecto-detail.component';
import { DatosProyectoComponent } from 'src/crud/DatosProyecto.component';
import { DesarrolloDetailComponent } from 'src/crud/Desarrollo-detail.component';
import { DesarrolloComponent } from 'src/crud/Desarrollo.component';
import { EquipoDetailComponent } from 'src/crud/Equipo-detail.component';
import { EquipoComponent } from 'src/crud/Equipo.component';
import { EspecificacionesTecnicasDetailComponent } from 'src/crud/EspecificacionesTecnicas-detail.component';
import { EspecificacionesTecnicasComponent } from 'src/crud/EspecificacionesTecnicas.component';
import { PuestosDetailComponent } from 'src/crud/Puestos-detail.component';
import { PuestosComponent } from 'src/crud/Puestos.component';
import { RequerimientosProyectoDetailComponent } from 'src/crud/RequerimientosProyecto-detail.component';
import { RequerimientosProyectoComponent } from 'src/crud/RequerimientosProyecto.component';
const routes: Routes = [
{path: 'AZ_TC_ACCION', component:AZ_TC_ACCIONComponent}, 
{path: 'AZ_TC_MODULO', component:AZ_TC_MODULOComponent}, 
{path: 'AZ_TC_PERFIL', component:AZ_TC_PERFILComponent}, 
{path: 'AZ_TR_MENU', component:AZ_TR_MENUComponent}, 
{path: 'AZ_TR_MODULO_ACCION', component:AZ_TR_MODULO_ACCIONComponent}, 
{path: 'AZ_TR_PERMISO_PERFIL', component:AZ_TR_PERMISO_PERFILComponent}, 
{path: 'AZ_TR_ROLES', component:AZ_TR_ROLESComponent}, 
{path: 'AZ_TR_seccion', component:AZ_TR_seccionComponent}, 
{path: 'AZ_TR_USUARIO', component:AZ_TR_USUARIOComponent}, 
{path: 'DatosProyecto', component:DatosProyectoComponent}, 
{path: 'Desarrollo', component:DesarrolloComponent}, 
{path: 'Equipo', component:EquipoComponent}, 
{path: 'EspecificacionesTecnicas', component:EspecificacionesTecnicasComponent}, 
{path: 'Puestos', component:PuestosComponent}, 
{path: 'RequerimientosProyecto', component:RequerimientosProyectoComponent}, 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }