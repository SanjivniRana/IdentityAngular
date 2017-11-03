import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
@Injectable()
export class DataService {

  baseUrl: string = 'http://localhost:56129/api/customer/'
  base2Url: string = 'http://localhost:56129/api/accounts/'
    constructor(private _http: Http) { }

       getCustomers(){
      return this._http.get(this.baseUrl + 'getcustomers')
                .map((response: Response) =>response.json())
                .catch(this._errorHandler);
    }

    _errorHandler(error:Response){
       //debugger;
      console.log(error);
      return Observable.throw(error || "Internal server error");
    }
       getCustomerById(id){
  return this._http.get(this.baseUrl +"GetCustomerById/"+ id)
          .map((response: Response) => response.json())
          .catch(this._errorHandler)
}
saveCustomer(customer){
  return this._http.post(this.baseUrl + 'saveCustomer', customer)
          .map((response: Response) => response.json())
          .catch(this._errorHandler)
}
deleteCustomer(id){
  return this._http.delete(this.baseUrl + "DeleteCustomer/" + id)
            .map((response:Response) =>  response.json())
            .catch(this._errorHandler)
}
registerUser(user){
 return this._http.post(this.base2Url + 'create', user)
          .map((response: Response) => response.json())
          .catch(this._errorHandler)
}
}
