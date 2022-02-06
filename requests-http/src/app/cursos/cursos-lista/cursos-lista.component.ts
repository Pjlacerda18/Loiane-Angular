
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { catchError, empty, Observable, Subject } from 'rxjs';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';
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
//bsModalRef: BsModalRef | any;

cursos$: Observable<Curso[]> | any;
error$ = new Subject<boolean>()

  constructor(private service: CursosService, private alertService: AlertModalService
  //private modalService: BsModalService
  )
  { }

  ngOnInit(): void {

  //this.service.list().subscribe(dados => this.cursos = dados);
this.onRefresh();


}

onRefresh() {
  this.cursos$ = this.service.list().pipe(
    catchError(error => {
    console.error(error);
    //this.error$.next(true);
    this.handleError();
    return empty();
  })
  );

this.service.list().pipe(
  catchError(error => empty()),
)
.subscribe(
  dados => {
    console.log(dados)
  }
  //,error => console.log(error),
 // () => console.log('Observable completo!')
)

  }

  handleError() {
    this.alertService.showAlertDanger(' Erro ao carregar cursos. Tente novamente mais tarde.')
    //this.bsModalRef = this.modalService.show(AlertModalComponent);
   // this.bsModalRef.content.type = 'danger';
   // this.bsModalRef.content.message = ' Erro ao carregar cursos. Tente novamente mais tarde.';

  }

}


