import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos/cursos.service';
import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component'
import { RouterModule, ROUTES, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlunosModule } from './alunos/alunos.module';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent,
    PaginaNaoEncontradaComponent,




 ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    RouterModule,
    CommonModule,
    //AlunosModule

      ],
  providers: [CursosService,
    FormsModule,
    RouterModule,
    CommonModule,
    NgModule,
    AuthService,
    AuthGuard,
    CursosGuard,
    AlunosGuard

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
