import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "../customerservice/data.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;
  title: string = "Add";
  id: number = 0;
  submitted: boolean = false;
  errorMessage: any;
  constructor(private _fb: FormBuilder, private route: ActivatedRoute, private customerService: DataService, public router: Router) {
   
    this.userForm = this._fb.group({
      id: 0,
      email: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmpassword: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]]

    })
   }
  register() {
    this.submitted = true;
    if (!this.userForm.valid) {
      return;
    }

    this.customerService.registerUser(this.userForm.value)
        .subscribe(userId => {
      //  alert('Saved Successfully!')
        this.router.navigate(['home', { id: userId }]);
      }, error => this.errorMessage = error)
  }
  ngOnInit() {
  }
  get email() { return this.userForm.get('email'); }
  get username() { return this.userForm.get('username'); }
  get password() { return this.userForm.get('password'); }
  get confirmpassword() { return this.userForm.get('confirmpassword'); }
  get firstname() { return this.userForm.get('firstname'); }
  get lastname() { return this.userForm.get('lastname'); }
}
