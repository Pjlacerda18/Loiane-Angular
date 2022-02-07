import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosFormComponent } from './cursos-form/cursos-form/cursos-form.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cursos'},
    { path:'novo', component:CursosFormComponent},
     { path:'editar/:id', component:CursosFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
