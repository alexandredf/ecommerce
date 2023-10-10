import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RequisicaoService {
  constructor(
    public http:HttpClient
  ) { }

  post(formData:any, rota:string = '') {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin' : '*',
        'Content-type': 'application/json'
      })
    };
    return this.http.post(`http://localhost:8080/${rota}`, formData, httpOptions);
  }

  put(formData: any, rota: string = '') {
    return this.http.post(`http://localhost:8080/${rota}`, formData);
  }

  delete(rota: string) {
    return this.http.get("http://localhost:8080" + rota);
  }

  get(rota: string) {
    return this.http.get("http://localhost:8080" + rota);
  }

  getById(rota: string) {
    return this.http.get("http://localhost:8080" + rota);
  }
}
