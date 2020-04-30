import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {
   /* console.log( this.api.get(environment.apiUrl +'/prueba')); */
  }

}
