import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private _elementeRef: ElementRef,
  private _renderer: Renderer2) {
   // this._elementeRef.nativeElement.style.backgroundColor = "yellow";
   this._renderer.setStyle(this._elementeRef.nativeElement, "background-color",'yellow');}
}
