import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddeditComponent } from "./addedit.component";

const routes: Routes = [
    { path: '', component: AddeditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddeditRoutingModule { }
