import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { User } from '../models/user'
import { Follow } from '../models/follow';
import { UserService } from '../services/user.service'
import { environment } from 'src/environments/environment';
import { AlertController, LoadingController, NavController, NavParams, ModalController } from '@ionic/angular'
import { FollowService } from '../services/follow.service'
import { ProfilePage } from '../profile/profile.page'
@Component({
  selector: 'app-follow-following',
  templateUrl: './follow-following.page.html',
  styleUrls: ['./follow-following.page.scss'],
  providers: [UserService, FollowService]
})
export class FollowFollowingPage implements OnInit {
  public identity;
  public token;
  public page = 1;
  public users;
  public user;
  public total;
  public pages
  public url;
  public follows;
  public following;
  public followUserOver;

  constructor(public navParams: NavParams,public modal: ModalController, private _route: ActivatedRoute, private _router: Router, private _userService: UserService, public alert: AlertController, public loading: LoadingController, public navCtrl: NavController, private _followService: FollowService) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = 'https://api-meet-sport.herokuapp.com/api';
    this.user = this.navParams.get('user')
    console.log(this.user,"asdasd");
  }

  ngOnInit() {
     this.getFollows(this.user._id, 1); 
  }

   async getFollows(user_id, page) {
    let loading = this.loading.create({
      message: 'Please wait...'
    });
    (await loading).present();
     this._followService.getFollowing(this.token,user_id,page).subscribe(
      async response => {
        if (!response.follows) {
          const alert = await this.alert.create({
            message: 'Ohh! Something gone wrong. 😥',
            buttons: ['OK']
          });
          (await loading).dismiss();
          await alert.present();
        } else {
           console.log(response, "aaaaa");
           this.total = response.total;
           this.following = response.following;
           this.pages = response.pages;
           this.follows = response.user_following/*
          this.users = response.users;
          this.total = response.total;
          this.page = response.page;
          this.follows = response.users_following
          console.log(response)
          if (this.page > this.pages) {
            this._router.navigate(['/people']);
          } */
          (await loading).dismiss(); 
        }
      },
      async error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
        if (errorMessage != null) {
          const alert = await this.alert.create({
            message: 'Ohh! Something gone wrongg. 😥',
            buttons: ['OK']
          });
          (await loading).dismiss();
          await alert.present();
        }
      }
    )
  } 

  mouseEnter(user_id) {
    this.followUserOver = user_id;
  }

  mouseLeave(user_id) {
    this.followUserOver = 0;
  }

  followUser(followed) {
    var follow = new Follow('', this.identity._id, followed);

    this._followService.addFollow(this.token, follow).subscribe(
      async response => {
        if (!response.follow) {
          const alert = await this.alert.create({
            message: 'Ohh! Something gone wrong. 😥',
            buttons: ['OK']
          });
          await alert.present();
        } else {
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

  unfollowUser(followed) {
    this._followService.deleteFollow(this.token, followed).subscribe(
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
    /* this.getUsers().then(result => infiniteScroll.target.complete()); */
  }

  async loadUser(user) {

    const modal = await this.modal.create({
      component: ProfilePage,
      componentProps: {
        'user': user,
      }
    });
    return await modal.present();
    /* this._router.navigate(['/profile', id]); */
  }

}
