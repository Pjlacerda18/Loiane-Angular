
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../curso';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styles: [],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {

//cursos: Curso[] | any;

cursos$: Observable<Curso[]> | any;

  constructor(private service: CursosService) { }

  ngOnInit(): void {

  //this.service.list().subscribe(dados => this.cursos = dados);

  this.cursos$ = this.service.list()

  }




}
