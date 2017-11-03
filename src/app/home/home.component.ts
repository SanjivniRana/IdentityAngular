import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Http,Headers, RequestOptions } from "@angular/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    private title = 'Login';
 
    constructor(private _router: Router,  private _http: Http) {
    }   
       
    login(event, username, password) {
        event.preventDefault();
         
        let url = "http://localhost:56129/oauth/token";
        let body = "username=" + username + "&password=" + password + "&grant_type=password";
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });        
         
        this._http.post(url, body, options).subscribe(
            response => {
                localStorage.setItem('access_token', response.json().access_token);
                localStorage.setItem('expires_in', response.json().expires_in);
                localStorage.setItem('token_type', response.json().token_type);
                localStorage.setItem('userName', response.json().userName);
                this._router.navigate(['customers']);
            },
            error => {
                alert(error.text());
                console.log(error.text());
            }
        );
    }    
}