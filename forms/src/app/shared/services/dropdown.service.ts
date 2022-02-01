import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }


getEstadosBr(){
return this.http.get('assets/dados/estadosBr.json').pipe(map(response =>response));
}

getCargos(){
  return [
    {nome: 'Dev', nível: 'Júnior', desc: 'Dev Jr' },
     {nome: 'Dev', nível: 'Júnior', desc: 'Dev Pl' },
      {nome: 'Dev', nível: 'Júnior', desc: 'Dev Sr' }
  ]
}
getTecnologias() {
 return [
   {nome:'java', desc:'Java'},
   {nome:'javascript', desc:'JavaScript'},
   {nome:'php', desc:'PHP'},
   {nome:'java', desc:'Ruby'}

]
}

}
