import {HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EstadoBr } from '../shared/models/estado-br';
import { DropdownService } from './../shared/services/dropdown.service'
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { empty, Observable } from 'rxjs';
import { FormValidations } from '../form-validations';
import { delay, distinctUntilChanged, map, switchMap, tap} from "rxjs/operators";
import { VerificaEmailService } from './services/verifica-email.service';
import { BaseFormComponent } from '../shared/base-form/base-form.component';
import { Cidade } from '../shared/models/cidade';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent extends BaseFormComponent implements OnInit {


  //formulario: FormGroup | any;
  estados:EstadoBr | any;
  cidades:Cidade[] | any ;

  //estados: Observable<EstadoBr[]> | any;
  cargos: [any] | any;
  tecnologias: any[] | any;
  newsletterOp: any[] | any;

  frameworks = ['Angular', 'React', 'Vue', 'Sencha'];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownService: DropdownService,
    private cepService: ConsultaCepService,
    private verificaEmailService: VerificaEmailService
    ) {
      super();
    }

  override ngOnInit(): void {


//this.verificaEmailService.verficarEmail('').subscribe();

    //this.estados = this.dropdownService.getEstadosBr();

    this.dropdownService.getEstadosBr().subscribe(dados => this.estados = dados);

    this.cargos = this.dropdownService.getCargos();

this.tecnologias = this.dropdownService.getTecnologias();

this.newsletterOp = this.dropdownService.getNewsletter()


   /* this.dropdownService.getEstadosBr()
    .subscribe(dados => this.estados = dados) */

   /* this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null)

    });*/

this.formulario = this.formBuilder.group({
nome: [null, [Validators.required, Validators.minLength(3)] ],
email: [null, [Validators.required, Validators.email], [this.validarEmail.bind(this)]],
confirmarEmail: [null, [FormValidations.equalsTo('email')]],


endereco: this.formBuilder.group({
  rua: [null, [Validators.required]],
cep: [null,[ Validators.required, FormValidations.cepValidator]],
numero:[null, Validators.required],
complemento: [null],
bairro: [null, Validators.required],
cidade: [null, Validators.required],
estado: [null, Validators.required],
}),

cargo: [null],

tecnologias: [null],

newsletter: ['s'],

termos:[null, Validators.pattern('true')],
frameworks: this.buildFrameworks()


});

this.formulario.get('endereco.cep')
.statusChanges
.pipe(distinctUntilChanged(),
tap(value => console.log('status CEP:',value)),
switchMap(status => status === 'VALID' ?
this.cepService.
consultaCEP(this.formulario.get('endereco.cep').value) : empty())
)
.subscribe((dados: any) => dados ? this.populaDadosForm(dados) : {});

 this.formulario.get('endereco.estado').valueChanges
        .pipe(
          tap(estado => console.log('Novo estado: ', estado)),
          map(estado => this.estados.filter((e: { sigla: unknown; }) => e.sigla === estado)),
          map((estados: any) => estados && estados.length > 0 ? estados[0].id : empty()),
          switchMap((estadoId: number) => this.dropdownService.getCidades(estadoId)),
          tap(console.log)
        )
        .subscribe((cidades: any) => this.cidades = cidades);


  }

  buildFrameworks() {
    const values = this.frameworks.map(v =>  new FormControl(false));
    return this.formBuilder.array(values, FormValidations.requiredMinCheckbox(1));

    /*return [
      new FormControl(false),
      new FormControl(false),
      new FormControl(false),
      new FormControl(false)
    ]*/

  }

submit() {
     let valueSubmit = Object.assign({}, this.formulario.value);

valueSubmit = Object.assign(valueSubmit, {
  frameworks: valueSubmit.frameworks.
  map((v: any, i: any)=> v ? this.frameworks[i] : null).filter((v: any) => v !== null)
});


console.log(valueSubmit)
       this.http.post('https://httpbin.org/post', JSON.stringify(valueSubmit)).subscribe(dados =>{
      console.log(dados);
      //reseta o form
      //this.resetar();
      },
      (error: any) => alert('erro'))


  }

consultaCEP(){
  const cep = this.formulario.get('endereco.cep').value;

  if (cep !=null && cep !== ""){
    this.cepService.consultaCEP(cep)?.subscribe(dados => this.populaDadosForm(dados));

}
}


populaDadosForm(dados: any | any){
 //this.formulario.patchValue()

  this.formulario.patchValue({
      endereco: {
        rua: dados.logradouro,
        // cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });

  this.formulario.get('nome').setValue('Pedro')
  }

resetaDadosForm(){

   this.formulario.form.patchValue({
     endereco: {
      rua: null,
      compemento: null,
      bairro:null,
      cidade: null,
      estado:null
  }
  });



}
setarCargo(){
  const cargo ={nome: 'Dev', nível: 'Júnior', desc: 'Dev Jr' };
  this.formulario.get('cargo').setValue(cargo);
}

compararCargos(obj1: any , obj2: any ){
  return obj1 && obj2 ? (obj1.nome === obj2.nome && obj1.nivel === obj2.nivel) :
  obj1 && obj2;

}

setarTecnologias() {
  this.formulario.get('tecnologias').setvalue(['java', 'javascript', 'php'])

  }

validarEmail(formControl: FormControl) {
    return this.verificaEmailService.verificarEmail(formControl.value).pipe(delay(3000),(map(emailExiste => emailExiste ? { emailInvalido: true } : null)));

  }

}

