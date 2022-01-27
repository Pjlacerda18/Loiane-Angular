import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AlunoFormComponent } from "../alunos/aluno-form/aluno-form.component";
import { FormCanDeactivate } from "./form-candeactive";


@Injectable()
export class AlunosDeactiveteGuard implements CanDeactivate<FormCanDeactivate> {


    canDeactivate(
      component: FormCanDeactivate,
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {


      //return component.podeMudarRota();
      return component.podeDesativar()
  }
}
