import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { AlertController, LoadingController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { Message } from '../models/message'

@Injectable()
export class  MessageService {
    public url:string;
    constructor(public _http: HttpClient, public alert: AlertController, public loading: LoadingController) {
        this.url = environment.apiUrl;
    }

    addMessage(token, message:Message):Observable<any>{
        let params = JSON.stringify(message);
        let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token);

        return this._http.post(this.url +'/message', params, {headers: headers});
    }

    getMyMessages(token, page = 1):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token);

        return this._http.get(this.url+'/my-messages/'+page, {headers:headers})
    }

    getEmmitMessages(token, page = 1):Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token);

        return this._http.get(this.url + '/messages/' + page, { headers: headers })
    }


}