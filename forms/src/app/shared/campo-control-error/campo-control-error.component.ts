import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-campo-control-erro',
  templateUrl: './campo-control-error.component.html',
  styleUrls: ['./campo-control-error.component.css']
})
export class CampoControlErrorComponent implements OnInit {


  @Input() mostrarErro: boolean | any;
   @Input() msgErro!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
