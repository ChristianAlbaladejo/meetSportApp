import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPrueba(){
    var prueba = this.http.get(environment.apiUrl + '/prueba')
    console.log(prueba)
    return this.http.get(environment.apiUrl + '/prueba')
  }
}
