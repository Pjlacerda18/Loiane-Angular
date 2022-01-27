import { EventEmitter, Injectable } from '@angular/core';

import { LogService } from '../shared/log.service';
@Injectable()
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>();

  private cursos: string[] = ['Angular 2', 'java', 'Phonegap']

constructor(private logService: LogService){
  console.log('CursosService')
}

  getCursos(){
    this.logService.consolelog('Obtendo lista de cursos')
    return this.cursos;
}


addCurso(curso: string){
   this.logService.consolelog(`Criando um novo curso: ${curso}`);
  this.cursos.push(curso);
  this.emitirCursoCriado.emit(curso);
}
}
