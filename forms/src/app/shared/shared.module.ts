import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { CampoControlErrorComponent } from './campo-control-error/campo-control-error.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownService } from './services/dropdown.service';



@NgModule({
  declarations: [
    FormDebugComponent,
    CampoControlErrorComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormDebugComponent,
    CampoControlErrorComponent
  ],
  providers: [ DropdownService ]
})
export class SharedModule { }
