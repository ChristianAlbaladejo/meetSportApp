import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AlertController, LoadingController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, public alert: AlertController, public loading: LoadingController) { }

  async getPrueba(){
   
  }
}
