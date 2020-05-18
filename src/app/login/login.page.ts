import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router, Params, ActivatedRoute } from '@angular/router'
import { User } from '../models/user';
import { UserService } from '../services/user.service'
import { AlertController, LoadingController, NavController } from '@ionic/angular'
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [UserService]
})
export class LoginPage implements OnInit {
  public user:User;
  public identity;
  public token;
  constructor(
    private _router: Router,
    private _route_: ActivatedRoute,
    private _userService: UserService,
    public alert: AlertController,
    public loading: LoadingController,
    public navCtrl: NavController,
  ) { 
    this.user = new User("", "", "", "", "", "", "ROLE_USER", "")
  }

  ngOnInit() {}

  async onSubmit(){
    let loading = this.loading.create({
      message: 'Please wait...'
    });
    (await loading).present();
    this._userService.signup(this.user).subscribe(
      async response => {
        this.identity = response.user;
        if (!this.identity || !this.identity._id) {
          const alert = await this.alert.create({
            message: 'Ohh! Something gone wrong. 😥',
            buttons: ['OK']
          });
          (await loading).dismiss();
          await alert.present();
        }else{
          localStorage.setItem('identity', JSON.stringify(this.identity))
          this.getToken();
          (await loading).dismiss();
        }
      },async error =>{
        var errorMessage = <any>error;
        if (errorMessage != null) {
          const alert = await this.alert.create({
            message: 'Ohh! Something gone wrong. 😥',
            buttons: ['OK']
          });
          (await loading).dismiss();
          await alert.present();
        }
      }
    )
  }

  getToken(){
    this._userService.signup(this.user, 'true').subscribe(
      async response => {
        this.token = response.token;
        if (this.token.length <= 0) {
          const alert = await this.alert.create({
            message: 'Ohh! Something gone wrong. 😥',
            buttons: ['OK']
          });
          await alert.present();
        } else {
          localStorage.setItem('token',this.token)
          this.navCtrl.pop();
          this.getCounters();
          this.navCtrl.navigateRoot('/');
        }
      }, async error => {
        var errorMessage = <any>error;
        if (errorMessage != null) {
          const alert = await this.alert.create({
            message: 'Ohh! Something gone wrong. 😥',
            buttons: ['OK']
          });
          await alert.present();
        }
      }
    )
  }

  getCounters(){
    this._userService.getCounters().subscribe(
      response => {
        localStorage.setItem('stats', JSON.stringify(response))
          console.log(response)
      },
      error => {
        console.log(<any>error)
      }
    )
  }

}
