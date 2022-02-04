import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Cidade } from '../models/cidade';
import { EstadoBr } from '../models/estado-br';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }


getEstadosBr(){
return this.http.get<EstadoBr[]>('assets/dados/estadosBr.json').pipe(map(response =>response));
}

getCidades(idEstado: number){
  return this.http.get<Cidade[]>('assets/dados/cidades.json').pipe(map((cidades:Cidade[]) =>cidades.filter(c => c.estado == idEstado))
  );
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
 getNewsletter() {
    return [
      { valor: 's', desc: 'Sim' },
      { valor: 'n', desc: 'Não' }
      ]
  }

}
