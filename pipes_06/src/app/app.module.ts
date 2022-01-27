import {  NgModule, LOCALE_ID, } from '@angular/core';
import {  BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExemplesPipesComponent } from './exemples-pipes/exemples-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SettingsService } from './settings.service';
import { FiltroArrayPipe } from './filtro-array.pipe';
import { FormsModule } from '@angular/forms';
import { FiltroArrayImpuroPipe } from './filtro-array-impuro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExemplesPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe,
    FiltroArrayImpuroPipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    FormsModule
/*{provide: LOCALE_ID, useValue:'pt-BR'}*/
/*SettingsService,
{
  provide: LOCALE_ID,
  deps:[SettingsService],
  useFactory:(settingsService: { getLocale: () => any; }) => settingsService.getLocale()
}*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
