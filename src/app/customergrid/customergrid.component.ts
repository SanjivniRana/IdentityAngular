import { Component, OnInit } from '@angular/core';
import { DataService } from "../customerservice/data.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-customergrid',
  templateUrl: './customergrid.component.html',
  styleUrls: ['./customergrid.component.css']
})
export class CustomergridComponent implements OnInit {

  constructor(private customerService: DataService,private _avRoute: ActivatedRoute,private _router: Router) { }
  customers: Array<any> = [];
  errorMessage: any;
  currentId: number = 0;
  searchText: string = '';


  getCustomers() {
    this.customerService.getCustomers().subscribe(
      data => this.customers = data,
      error => this.errorMessage = error
    )
  }
  add(){
    this._router.navigate(['/add']);
  }
  edit(id){
    this._router.navigate(['/edit/' + id])
  }
  delete(id){
   var ans = confirm("Do you want to delete customer with Id: " + id);
   if(ans){
     this.customerService.deleteCustomer(id)
      .subscribe(  data=> {
        var index = this.customers.findIndex(x=>x.id == id);
        this.customers.splice(index, 1);
      }, error=> this.errorMessage = error )
   }
}
  ngOnInit() {
    this.getCustomers()
     if (this._avRoute.snapshot.params["id"])
            this.currentId = parseInt(this._avRoute.snapshot.params["id"]);
  }

}
