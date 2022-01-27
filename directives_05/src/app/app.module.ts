import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { DirectivesNgswitchComponent } from './directives-ngswitch/directives-ngswitch.component';
import { DirectivesNgforComponent } from './directives-ngfor/directives-ngfor.component';
import { DirectivesNgClassComponent } from './directives-ng-class/directives-ng-class.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { DirectivesCostumComponent } from './directives-costum/directives-costum.component';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';
import { HighlightDirective } from './shared/highlight.directive';
import { NgElseDirective } from './ng-else.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesNgswitchComponent,
    DirectivesNgforComponent,
    DirectivesNgClassComponent,
    NgContentComponent,
    FundoAmareloDirective,
    DirectivesCostumComponent,
    HighlightMouseDirective,
    HighlightDirective,
    NgElseDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
