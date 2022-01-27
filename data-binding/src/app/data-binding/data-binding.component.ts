import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.css']
  styles:[
    `
    .highlight {
    background-color: yellow;
    font-weight: bold;
}
    `
  ]
})
export class DataBindingComponent implements OnInit {

url:string = 'http://loiane.com'
cursoAngular:boolean = true
urlImagem = 'http://source.unsplash.com/random';

valorAtual:String = '';
valorSalvo:String = '';
isMouseOver:boolean =false;

nomeDoCurso:string = 'Angular';

valorInicial = 15;

getValor(): number {
  return 1;
}
getCurtirCurso(){
  return true;
}

botaoClicado() {
  alert('botão clicado!')
}
onKeyUp(evento: KeyboardEvent) {
  this.valorAtual = (<HTMLInputElement>evento.target).value;
}
salvarValor(valor: String) {
  this.valorSalvo = valor;
}
 onMouseOverOut(){
   this.isMouseOver = !this.isMouseOver
 }
  constructor() { }

  ngOnInit(): void {
  }

}
