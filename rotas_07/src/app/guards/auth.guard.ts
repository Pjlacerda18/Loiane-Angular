import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ) : Observable<boolean> | boolean {

return this.verificarAcesso();
  }



  private verificarAcesso(){
     if (this.authService.usuarioEstaAutenticado()){
      return true;
    }
this.router.navigate(['/login']);
return false;
  }

    canLoad(route: Route): Observable<boolean>|any| boolean {
      console.log('canLoad: verficando se o usuário pode carregar o cod ')

    }
}
