import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerificaEmailService {

  constructor(private http: HttpClient) { }

  verificarEmail(email: string) {
    return this.http.get('assets/dados/verificarEmail.json').pipe
    (map((dados: any) => dados.emails),
    (map((dados: { email:string}[]) => dados.filter(v => v.email === email)),
    map((dados: any[]) => dados.length > 0 )))

  }
}
