import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { Publication } from '../models/publication';
import { AlertController, LoadingController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Injectable()
export class PublicationService {
    public url: string;
    public identity;
    public token;
    public stats;
    constructor(public _http: HttpClient, public alert: AlertController, public loading: LoadingController) {
        this.url = 'https://api-meet-sport.herokuapp.com/api';
    }

    addPublication(token, publication): Observable<any> {
        let params = JSON.stringify(publication);
        let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token);

        return this._http.post(this.url + '/publication', params, { headers: headers });
    }

    getPublications(token, page = 1): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token);

        return this._http.get(this.url + '/publications/' + page, { headers: headers });
    }

    getPublicationsUser(token, user_id, page = 1): Observable<any> {
        console.log(user_id)
        let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token);

        return this._http.get(this.url + '/publications-user/' + user_id + '/' + page, { headers: headers });
    }

    deletePublication(token, id): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token);

        return this._http.delete(this.url + '/publication/' + id, { headers: headers });
    }

    like(token, publication): Observable<any> {
        let params = JSON.stringify(publication);
        console.log(publication)
        let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token);

        return this._http.post(this.url + '/like/'+ publication._id , params, { headers: headers });
    }

    dislike(token, publication): Observable<any> {
        let params = JSON.stringify(publication);
        console.log(publication)
        let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token);

        return this._http.post(this.url + '/dislike/' + publication._id, params, { headers: headers });
    }


}