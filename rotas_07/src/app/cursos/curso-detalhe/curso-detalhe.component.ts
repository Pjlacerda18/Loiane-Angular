import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from '../cursos.service';



@Component({
  selector: 'app-curso-detalhe',
  templateUrl: 'curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {
  [x: string]: any;

id!: number;

curso: any;

  constructor(private route: ActivatedRoute, private router: Router,
  private cursosService: CursosService) {
   // this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        this.curso = this['cursosServices'].getCurso(this.curso);

        if( this.curso = null){
          this.router.navigate(['/naoEncontrado'])
        }
      }
    )
  }

}
