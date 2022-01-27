import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {
  backgroundColor!: string;

  @HostListener('mouseenter') onMouseOver(){/*
this._renderer.setStyle(this._elementeRef.nativeElement, 'backgroundColor','yellow');*/this.backgroundColor= 'yellow';
 }
 @HostListener('mouseleave') onMouseLeave(){/*
this._renderer.setStyle(this._elementeRef.nativeElement, 'backgroundColor','white')};*/
this.backgroundColor= 'white';}
  @HostBinding('style.backgroundColor') get setColor(){return this.backgroundColor}

  constructor(
    //private _elementeRef: ElementRef, private _renderer: Renderer2
  ){};

}
