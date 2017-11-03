import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "../customerservice/data.service";

@Component({
  selector: 'app-addedit',
  templateUrl: './addedit.component.html',
  styleUrls: ['./addedit.component.css']
})
export class AddeditComponent implements OnInit {

  customerForm: FormGroup;
  title: string = "Add";
  id: number = 0;
  submitted: boolean = false;
  errorMessage: any;

  constructor(private _fb: FormBuilder, private route: ActivatedRoute, private customerService: DataService, public router: Router) {
    if (this.route.snapshot.params["id"]) {
      this.id = parseInt(this.route.snapshot.params["id"]);
      console.log(this.id);
      this.title = 'Edit';
    }

    this.customerForm = this._fb.group({
      id: 0,
      name: ['', [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30)]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]

    })
  }
  save() {
    this.submitted = true;
    if (!this.customerForm.valid) {
      return;
    }

    this.customerService.saveCustomer(this.customerForm.value)
      .subscribe(custId => {
        //alert('Saved Successfully!')
        this.router.navigate(['customers', { id: custId }]);
      }, error => this.errorMessage = error)
  }
  cancel() {
    this.router.navigate(["customers", { id: this.id }]);
  }
  // we will use it to load data for update
  ngOnInit() {
    if (this.id > 0) {
      this.customerService.getCustomerById(this.id)
        .subscribe(resp => this.customerForm.setValue(resp)
        , error => this.errorMessage = error);
    }
  }

  get name() { return this.customerForm.get('name'); }
  get email() { return this.customerForm.get('email'); }
  get password() { return this.customerForm.get('password'); }

}
