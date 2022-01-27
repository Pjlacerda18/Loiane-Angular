import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup | any;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
    ) { }

  ngOnInit(): void {

   /* this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null)

    });*/

this.formulario = this.formBuilder.group({
nome: [null, Validators.required],
email: [null, [Validators.required, Validators.email]],
rua: [null, Validators.required],
cep: [null, Validators.required],
numero:[null, Validators.required],
complemento: [null],
bairro: [null, Validators.required],
cidade: [null, Validators.required],
estado: [null, Validators.required],
});


  }

  onSubmit() {
    console.log(this.formulario);

    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value)).pipe(map(res => res)).subscribe(dados =>{
      console.log(dados);
      //reseta o form
      this.resetar();
      },
      (error: any) => alert('erro'))

  }

  resetar() {
    this.formulario.reset()
  }

   verificaValidTouched(campo: any){
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched

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

}
