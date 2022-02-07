import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { BrowserModule } from '@angular/platform-browser';
import { CursosFormComponent } from './cursos-form/cursos-form/cursos-form.component';

@NgModule({
  declarations: [
    CursosListaComponent,
    CursosFormComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    BrowserModule,
    NgModule,
    HttpClientModule
  ]
})
export class CursosModule { }
