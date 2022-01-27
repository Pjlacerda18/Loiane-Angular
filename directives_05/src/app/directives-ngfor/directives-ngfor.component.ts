import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-ngfor',
  templateUrl: './directives-ngfor.component.html',
  styleUrls: ['./directives-ngfor.component.css']
})
export class DirectivesNgforComponent implements OnInit {

cursos: string[] = ["Angular 2", "Java", "python"]
  constructor() { }

  ngOnInit(): void {
    for (let i=0; i<this.cursos.length;i++){
      let curso = this.cursos[i]
    }}
    }
