import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { AlertController, LoadingController, NavController, ModalController, NavParams } from '@ionic/angular';
import { UploadService } from '../services/upload.service';
import { environment } from 'src/environments/environment';
import { FollowFollowingPage } from '../follow-following/follow-following.page'


@Component({
  selector: 'app-other-user',
  templateUrl: './other-user.page.html',
  styleUrls: ['./other-user.page.scss'],
  providers: [UserService, UploadService]
})
export class OtherUserPage implements OnInit {
  public user: User;
  public identity;
  public token;
  public status: string;
  
  public imageFilePath;
  public url;
  public stats;
  public mode = 'login';
  constructor(public navParams: NavParams, public navCtrl: NavController, public modalController: ModalController, private _route: ActivatedRoute, private _router: Router, private _userService: UserService, public alert: AlertController, public loading: LoadingController, private _uploadService: UploadService) {
   
    this.user = this.navParams.get('user');
    console.log(this.user, 'aa')
     this.getUser(this.user._id) 
    /* this.identity = this.user; */
    this.token = this._userService.getToken();
    
    this.url = environment.apiUrl;
    this.stats = this._userService.getStats();
  }

  ngOnInit() {
  }

  getUser(id) {
    this._userService.getUser(id).subscribe(
      async response => {
        if (response.user) {
          console.log(response);
          this.user = response.user;
          console.log(this.user);

        } else {
          const alert = await this.alert.create({
            message: 'Ohh! Something gone wrong. 😥',
            buttons: ['OK']
          });
          console.log('problemo')
          await alert.present();
        }
      },
      async error => {
        const alert = await this.alert.create({
          message: 'Ohh! Something gone wrong. 😥',
          buttons: ['OK']
        });

        await alert.present();
      }
    )
  }

  dismiss(){
    this.modalController.dismiss();
  }

  async following() {
  const modal = await this.modalController.create({
    component: FollowFollowingPage,
    componentProps: {
      'user': this.user,
    }
  });

    return await modal.present();

}
}

