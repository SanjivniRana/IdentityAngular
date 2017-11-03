import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CustomergridComponent } from "./customergrid.component";
import { CustomergridRoutingModule } from "./customergrid-routing.module";


@NgModule({
  imports: [
    CommonModule,
    CustomergridRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  declarations: [CustomergridComponent]
})
export class CustomergridModule { }
