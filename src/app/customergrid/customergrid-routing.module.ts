import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomergridComponent } from "./customergrid.component";

const routes: Routes = [
    { path: '', component: CustomergridComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomergridRoutingModule { }
