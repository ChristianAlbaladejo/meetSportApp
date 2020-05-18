import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute} from '@angular/router'
import { User } from '../models/user';
import { UserService } from '../services/user.service'
import { AlertController, LoadingController } from '@ionic/angular'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  providers: [UserService]
})
export class RegisterPage implements OnInit {
public user:User;
  constructor(
    private _router: Router,
    private _route_: ActivatedRoute,
    private _userService: UserService, 
    public alert: AlertController,
     public loading: LoadingController
  ) { 
    this.user = new User("","","","","","","ROLE_USER","")
  }

  ngOnInit() {
  }
  async onSubmit() {
    let loading = this.loading.create({
      message: 'Please wait...'
    });

    (await loading).present();
    this._userService.register(this.user).subscribe(
      async response => {
        if (response.user && response.user._id) {
          const alert = await this.alert.create({
            header: 'Success',
            message: 'You have already registered! 🤪',
            buttons: ['OK']
          });
          (await loading).dismiss();
          await alert.present();
        }else{
          const alert = await this.alert.create({
            message: 'Ohh! Something gone wrong. 😥',
            buttons: ['OK']
          });
          (await loading).dismiss();
          await alert.present();
        }
      },
      error => {
        console.log(<any>error)
      }
    );
  }

}
