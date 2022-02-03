import { HttpClientModule, } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import{ DataFormComponent } from './data-form.component';



@NgModule({
  declarations: [DataFormComponent],


  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    SharedModule,
    HttpClientModule,

  ]
})
export class DataFormModule { }
