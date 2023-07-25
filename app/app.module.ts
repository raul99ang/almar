import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AZ_TC_ACCIONComponent } from 'src/crud/AZ_TC_ACCION.component';
import { AZ_TC_ACCIONDetailComponent } from 'src/crud/AZ_TC_ACCION-detail.component';
 import { AZ_TC_MODULOComponent } from 'src/crud/AZ_TC_MODULO.component';
import { AZ_TC_MODULODetailComponent } from 'src/crud/AZ_TC_MODULO-detail.component';
 import { AZ_TC_PERFILComponent } from 'src/crud/AZ_TC_PERFIL.component';
import { AZ_TC_PERFILDetailComponent } from 'src/crud/AZ_TC_PERFIL-detail.component';
 import { AZ_TR_MENUComponent } from 'src/crud/AZ_TR_MENU.component';
import { AZ_TR_MENUDetailComponent } from 'src/crud/AZ_TR_MENU-detail.component';
 import { AZ_TR_MODULO_ACCIONComponent } from 'src/crud/AZ_TR_MODULO_ACCION.component';
import { AZ_TR_MODULO_ACCIONDetailComponent } from 'src/crud/AZ_TR_MODULO_ACCION-detail.component';
 import { AZ_TR_PERMISO_PERFILComponent } from 'src/crud/AZ_TR_PERMISO_PERFIL.component';
import { AZ_TR_PERMISO_PERFILDetailComponent } from 'src/crud/AZ_TR_PERMISO_PERFIL-detail.component';
 import { AZ_TR_ROLESComponent } from 'src/crud/AZ_TR_ROLES.component';
import { AZ_TR_ROLESDetailComponent } from 'src/crud/AZ_TR_ROLES-detail.component';
 import { AZ_TR_seccionComponent } from 'src/crud/AZ_TR_seccion.component';
import { AZ_TR_seccionDetailComponent } from 'src/crud/AZ_TR_seccion-detail.component';
 import { AZ_TR_USUARIOComponent } from 'src/crud/AZ_TR_USUARIO.component';
import { AZ_TR_USUARIODetailComponent } from 'src/crud/AZ_TR_USUARIO-detail.component';
 import { DatosProyectoComponent } from 'src/crud/DatosProyecto.component';
import { DatosProyectoDetailComponent } from 'src/crud/DatosProyecto-detail.component';
 import { DesarrolloComponent } from 'src/crud/Desarrollo.component';
import { DesarrolloDetailComponent } from 'src/crud/Desarrollo-detail.component';
 import { EquipoComponent } from 'src/crud/Equipo.component';
import { EquipoDetailComponent } from 'src/crud/Equipo-detail.component';
 import { EspecificacionesTecnicasComponent } from 'src/crud/EspecificacionesTecnicas.component';
import { EspecificacionesTecnicasDetailComponent } from 'src/crud/EspecificacionesTecnicas-detail.component';
 import { PuestosComponent } from 'src/crud/Puestos.component';
import { PuestosDetailComponent } from 'src/crud/Puestos-detail.component';
 import { RequerimientosProyectoComponent } from 'src/crud/RequerimientosProyecto.component';
import { RequerimientosProyectoDetailComponent } from 'src/crud/RequerimientosProyecto-detail.component';
 @NgModule({
  declarations: [
    AppComponent,
AZ_TC_ACCIONComponent,
AZ_TC_ACCIONDetailComponent,
 AZ_TC_MODULOComponent,
AZ_TC_MODULODetailComponent,
 AZ_TC_PERFILComponent,
AZ_TC_PERFILDetailComponent,
 AZ_TR_MENUComponent,
AZ_TR_MENUDetailComponent,
 AZ_TR_MODULO_ACCIONComponent,
AZ_TR_MODULO_ACCIONDetailComponent,
 AZ_TR_PERMISO_PERFILComponent,
AZ_TR_PERMISO_PERFILDetailComponent,
 AZ_TR_ROLESComponent,
AZ_TR_ROLESDetailComponent,
 AZ_TR_seccionComponent,
AZ_TR_seccionDetailComponent,
 AZ_TR_USUARIOComponent,
AZ_TR_USUARIODetailComponent,
 DatosProyectoComponent,
DatosProyectoDetailComponent,
 DesarrolloComponent,
DesarrolloDetailComponent,
 EquipoComponent,
EquipoDetailComponent,
 EspecificacionesTecnicasComponent,
EspecificacionesTecnicasDetailComponent,
 PuestosComponent,
PuestosDetailComponent,
 RequerimientosProyectoComponent,
RequerimientosProyectoDetailComponent,
 ],
imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }