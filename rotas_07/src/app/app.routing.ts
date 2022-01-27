import { RouterModule, Routes,} from '@angular/router'
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent} from './cursos/cursos.component'
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';


const APP_ROUTES: Routes = [

{ path: '', component: HomeComponent,
 canActivate: [AuthGuard]},
{ path: 'login', component: LoginComponent },
{ path: 'cursos', component: CursosComponent,
canActivate: [AuthGuard],
canActivateChild: [CursosGuard], },
{ path: 'curso/:id', component: CursoDetalheComponent,
canActivate: [AuthGuard],
canActivateChild: [CursosGuard] },
{ path: 'naoEncontrado', component: CursoNaoEncontradoComponent,
canActivate: [AuthGuard],
canActivateChild: [CursosGuard] },
 {path: 'alunos', loadChildren: ()=> import('./alunos/alunos.module').then(mod => mod.AlunosModule),
 canActivate: [AuthGuard],

 //canActivateChild: [AlunosGuard],
  },
  {path: '', redirectTo: '/home', pathMatch:'full'},
  { path: '**', component: PaginaNaoEncontradaComponent,
  canActivate: [AuthGuard],}
];


export const routing: ModuleWithProviders<any>= RouterModule.forRoot(APP_ROUTES, {useHash: true});
