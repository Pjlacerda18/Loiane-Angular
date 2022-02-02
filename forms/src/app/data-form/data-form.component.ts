import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { DropdownService } from './../shared/services/dropdown.service'
import { EstadoBr } from '../shared/models/estado-br';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { FormValidations } from '../form-validations';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup | any;
  controle: any;
  estados: Observable<EstadoBr[]> | any;
  cargos: [any] | any;
  tecnologias: any[] | any;
  newsletterOp: any[] | any;

  frameworks = ['Angular', 'React', 'Vue', 'Sencha'];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownService: DropdownService,
    private cepService: ConsultaCepService
    ) { }

  ngOnInit(): void {
    this.estados = this.dropdownService.getEstadosBr();

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
nome: [null, Validators.required],
email: [null, [Validators.required, Validators.email]],
confirmarEmail: [null, [FormValidations.equalsTO('')]],


endereco: this.formBuilder.group({
  rua: [null, Validators.required],
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



  onSubmit() {
    console.log(this.formulario);
    let valueSubmit = Object.assign({}, this.formulario.value);

valueSubmit = Object.assign(valueSubmit, {
  frameworks: valueSubmit.frameworks.
  map((v: any, i: any)=> v ? this.frameworks[i] : null).filter((v: any) => v !== null)
});

    if(this.formulario.valid){
       this.http.post('https://httpbin.org/post', JSON.stringify(valueSubmit)).subscribe(dados =>{
      console.log(dados);
      //reseta o form
      //this.resetar();
      },
      (error: any) => alert('erro'))

  } else {
    console.log('formulario invalido');
    this.verificaValidacoesForm(this.formulario);

  };
  }


verificaValidacoesForm(formGroup: FormGroup){
   Object.keys(formGroup.controls).forEach(campo =>{
    console.log(campo);
    const controle = formGroup.get(campo);
    this.controle.markAsDirty();
    if (controle instanceof FormGroup){
      this.verificaValidacoesForm(controle);
    }
   });
}


  resetar() {
    this.formulario.reset()
  }

   verificaValidTouched(campo: any){
    return !this.formulario.get(campo).valid && (this.formulario.get(campo).touched || this.formulario.get(campo).dirty)

  }

  verificaRequired(campo: string) {
    return(
      this.formulario.get(campo).hasError('required') && (this.formulario.get(campo).touched || this.formulario.get(campo).dirty)
    )
  }

  verificaEmailInvalido(){
    let campoEmail = this.formulario.get('email');
    if (campoEmail.errors){
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }


  aplicaCssErro(campo: string){
  return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback':this.verificaValidTouched(campo)
    }
}


consultaCEP(){
  const cep = this.formulario.get('endereco.cep').value;

  if (cep !=null && cep !== ""){
    this.cepService.consultaCEP(cep)?.subscribe(dados => this.populaDadosForm(dados));

}
}


populaDadosForm(dados: any){
 this.formulario.patchValue

  this.formulario.form.patchValue({
     endereco: {
      rua: dados.logradouro,
      //cep:dados.cep ,
      numero:'',
      compemento: dados.complemento,
      bairro:dados.bairro,
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



}

