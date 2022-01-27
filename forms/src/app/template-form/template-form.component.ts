import { Component, OnInit } from '@angular/core';
import{HttpClient, HttpHandler} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null ,
    email: null
  }



onSubmit(form: any){

this.http.post('https://httpbin.org/post', JSON.stringify(form.value)).pipe(map(res => res)).subscribe(dados => console.log());
form.form.reset()

}
  constructor(private http:HttpClient) { }



  ngOnInit(): void {
  }

  verificaValidTouched(campo: { valid: any; touched: any; }){
    return !campo.valid && campo.touched;
  }



aplicaCssErro(campo: { valid: any; touched: any; }){
  return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback':this.verificaValidTouched(campo)
    }
}


consultaCEP(cep: any, form: any){
  cep = cep.replace(/\D/g, '');

  if (cep != ""){

    var validaCep = /^[0-9]{8}$/;

    if(validaCep.test(cep)) {

      this.resetaDadosForm(form);

     this.http.get(`//viacep.com.br/ws/${cep}/json`)
     .pipe(map(dados => dados)).subscribe(dados => this.populaDadosForm(dados, form));
  }

}



}
populaDadosForm(dados: any, formulario: any){
 /* formulario.setValue({
    nome: formulario.value.nome,
    email: formulario.value.email,
    endereco: {
      rua: dados.logradouro,
      cep:dados.cep ,
      numero:'',
      compemento: dados.complemento,
      bairro:dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf
    }
  });*/

  formulario.form.patchValue({
     endereco: {
      rua: dados.logradouro,
      cep:dados.cep ,
      numero:'',
      compemento: dados.complemento,
      bairro:dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf
  }})

}

resetaDadosForm(formulario: any){
   formulario.form.patchValue({
     endereco: {
      rua: null,
      compemento: null,
      bairro:null,
      cidade: null,
      estado:null
  }})

}

}


