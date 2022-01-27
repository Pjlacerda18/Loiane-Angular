import { Component, Input, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

@Input() valor: number = 0;

@Output('mudouValor') mudouValor = new EventEmitter();


  @ViewChild('campoInput')
  campoValorInput!: ElementRef;

incrementa(){
  this.campoValorInput.nativeElement.value++
  this.mudouValor.emit({novoValor: this.valor})
}

decrementa(){
 this.campoValorInput.nativeElement.value--;
  this.mudouValor.emit({novoValor: this.valor})

}

onMudouValor(evento: any){
  console.log(evento.novoValor);

}

  constructor() { }

  ngOnInit(): void {
  }

}
