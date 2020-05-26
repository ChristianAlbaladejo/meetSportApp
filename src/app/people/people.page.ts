import { Component, OnInit, ViewChild   } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { User } from '../models/user'
import { Follow } from '../models/follow';
import { UserService } from '../services/user.service'
import { environment } from 'src/environments/environment';
import { AlertController, LoadingController, NavController, IonInfiniteScroll, ModalController  } from '@ionic/angular'
import {FollowService} from '../services/follow.service'


@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
  providers: [UserService, FollowService]
})
export class PeoplePage implements OnInit  {
  public identity;
  public token;
  public page = 1;
  public users;
  public total;
  public pages
  public url;
  public follows;
  public followUserOver;
 
  constructor(public modal: ModalController,private _route: ActivatedRoute, private _router: Router, private _userService: UserService, public alert: AlertController,public loading: LoadingController,public navCtrl: NavController, private _followService: FollowService) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = environment.apiUrl;
   }

  ngOnInit() {
    this.getUsers();
  }

  async getUsers(){
    let loading = this.loading.create({
      message: 'Please wait...'
    });
    (await loading).present();
    this._userService.getUsers(this.page).subscribe(
      async response => {
        if (!response.users) {
          const alert = await this.alert.create({
            message: 'Ohh! Something gone wrong. 😥',
            buttons: ['OK']
          });
          (await loading).dismiss();
          await alert.present();
        }else{
          this.users= response.users;
          this.total = response.total;
          this.page = response.page;
          this.follows = response.users_following
          console.log(response)
          if (this.page > this.pages) {
            this._router.navigate(['/people']);
          }
          (await loading).dismiss();
        }
      },
      async error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
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

  mouseEnter(user_id){
    this.followUserOver = user_id;
  }

  mouseLeave(user_id) {
    this.followUserOver = 0;
  }

  followUser(followed){
    var follow = new Follow('', this.identity._id, followed);

    this._followService.addFollow(this.token, follow).subscribe(
      async response => {
        if (!response.follow) {
          const alert = await this.alert.create({
            message: 'Ohh! Something gone wrong. 😥',
            buttons: ['OK']
          });
          await alert.present();
        }else{
          this.follows.push(followed);
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

  unfollowUser(followed){
    this._followService.deleteFollow(this.token,followed).subscribe(
      response => {
        var search = this.follows.indexOf(followed);
        if (search != -1) {
          this.follows.splice(search, 1)
        }
      },
      async error => {
        const alert = await this.alert.create({
          message: 'Ohh! Something gone wrong. 😥',
          buttons: ['OK']
        });
        await alert.present();
      })
  }


  doInfinite(infiniteScroll) {
    this.page++;
    this.getUsers().then(result => infiniteScroll.target.complete());
  }

  async loadUser(id){
    /*
    const modal = await this.modal.create({
      component: ProfilePage,
      componentProps: {
        'user': user,
      }
    });
    return await modal.present();  */
    this._router.navigate(['/profile', id]);
  }

}
