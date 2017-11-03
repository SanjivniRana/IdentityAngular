import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddeditRoutingModule } from "./addedit-routing.module";
import { AddeditComponent } from "./addedit.component";

@NgModule({
  imports: [
        CommonModule,
        AddeditRoutingModule,
        FormsModule,
        ReactiveFormsModule
  ],
  declarations: [AddeditComponent]
})
export class AddeditModule { }
