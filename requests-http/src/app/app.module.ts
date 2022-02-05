import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CursosListaComponent } from './cursos/cursos-lista/cursos-lista.component';
import { CursosService } from './cursos/cursos.service';
@NgModule({
  declarations: [
    AppComponent,
    CursosListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,


  ],
  providers: [ CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
