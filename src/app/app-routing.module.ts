import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: 'full' },
    { path: "home", loadChildren: './home/home.module#HomeModule' },
    { path: "customers", loadChildren: './customergrid/customergrid.module#CustomergridModule' },
    { path: "add", loadChildren: './addedit/addedit.module#AddeditModule' },
    { path: "edit/:id", loadChildren: './addedit/addedit.module#AddeditModule' },
    { path: "register", loadChildren: './register/register.module#RegisterModule' },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
