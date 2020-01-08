import { Injectable } from '@angular/core';
import { AuthHttp } from "angular2-jwt";
import { Http,Headers, RequestOptions } from '@angular/http';

@Injectable()
export class OrderService {
  //we change Http to AuthHttp will work the exactly same result like below
  constructor(private http:AuthHttp){}
  getOrders(){
    return this.http.get('/api/orders')
        .map(response=>response.json())
  }

  /** 
  constructor(private http:Http) {
  }

  getOrders() { 
    //return this.authHttp.get('/api/orders')
      //.map(response => response.json());
      let headers=new Headers();
      let token=localStorage.getItem('token');
      headers.append('Authorization','Bearer '+token)

      let options=new RequestOptions({headers:headers})

      return this.http.get('/api/orders',options)
      .map(response=>response.json())
  }**/
}
