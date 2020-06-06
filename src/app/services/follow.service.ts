import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { AlertController, LoadingController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { Follow } from '../models/follow';

@Injectable()
export class FollowService{
    public url:string;

    constructor(private _http: HttpClient){
        this.url = 'https://api-meet-sport.herokuapp.com/api';
    }

    addFollow(token, follow):Observable<any>{
        let params = JSON.stringify(follow);
        let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token);

        return this._http.post(this.url+'/follow',params,{headers:headers});
    }

    deleteFollow(token, id):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token);

        return this._http.delete(this.url + '/deleteFollow/'+id, { headers: headers });
    }

    getFollowing(token, userId = null, page = 1):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token);

        return this._http.get(this.url + '/following/' + userId + '/' + page, { headers: headers });
    }

    getMyFollows(token):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token);
        return this._http.get(this.url + '/get-my-follows/true', { headers: headers })
    }
}