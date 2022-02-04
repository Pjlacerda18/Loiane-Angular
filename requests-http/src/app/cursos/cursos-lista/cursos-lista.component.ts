
import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styles: [],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {

public cursos: Curso[] | any = [];
public teste: number[] = [1, 2, 3, 4];
  constructor(private service: CursosService) { }

  ngOnInit(): void {

  this.service.list().subscribe(dados => {
    console.log(dados)
    this.cursos = dados;
  });

  }



}
