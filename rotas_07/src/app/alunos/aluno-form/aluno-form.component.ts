import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormCanDeactivate } from 'src/app/guards/form-candeactive';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, FormCanDeactivate {
  aluno: any ={};
  inscricao!: Subscription;
  private formMudou: boolean = false

  constructor(
    private alunosService: AlunosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params:any)=> {
      let id = params['id'];

      this.aluno = this.alunosService.getAluno(id)


      if (this.aluno === null){
        this.aluno = {};
      }
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  onInput(){
this.formMudou = true;
  }

  podeMudarRota(){

    if(this.formMudou){
      confirm('Tem certeza que deseja sair sem salvar?')
    }
    return true;
  }

podeDesativar(){
  return this.podeMudarRota();
}

}
