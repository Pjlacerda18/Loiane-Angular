import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosListaComponent } from './cursos/cursos-lista/cursos-lista.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'cursos'},
  { path: 'cursos', component: CursosListaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
function mod(mod: any, arg1: (any: any) => any): import("@angular/core").Type<any> | import("@angular/core").NgModuleFactory<any> | import("rxjs").Observable<import("@angular/core").Type<any>> | Promise<any> {
  throw new Error('Function not implemented.');
}

