import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { User } from '../models/user'
import { Follow } from '../models/follow';
import { Message } from '../models/message';
import { UserService } from '../services/user.service'
import { environment } from 'src/environments/environment';
import { AlertController, LoadingController, NavController, NavParams, ModalController } from '@ionic/angular'
import { FollowService } from '../services/follow.service'
import { ProfilePage } from '../profile/profile.page'
import { MessageService } from '../services/message.service'

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
  providers: [UserService, FollowService, MessageService]
})
export class AddPage implements OnInit {
  public message:Message;
  public identity;
  public token;
  public url: string;
  public follows;

  constructor(public _messageService: MessageService, public navParams: NavParams, public modal: ModalController, private _route: ActivatedRoute, private _router: Router, private _userService: UserService, public alert: AlertController, public loading: LoadingController, public navCtrl: NavController, private _followService: FollowService) { 
    this.identity = this._userService.getIdentity();
    this.message = new Message('','','','',this.identity._id,'');
    this.token = this._userService.getToken();
    this.url = 'https://api-meet-sport.herokuapp.com/api';
  }

  ngOnInit() {
    this.getMyFollows();
  }

  goBack() {
    this.modal.dismiss();
  }

  async onSubmit(form){
    let loading = this.loading.create({
      message: 'Please wait...'
    });
    (await loading).present();
    this._messageService.addMessage(this.token, this.message).subscribe(
      async response => {
        form.reset();
        const alert = await this.alert.create({
          message: 'The message has been sent successfully!!. 👍',
          buttons: ['OK']
        });
        (await loading).dismiss();
        await alert.present();
        this.modal.dismiss();
      },
      async error =>{
        const alert = await this.alert.create({
          message: 'Ohh! Something gone wrong. 😥',
          buttons: ['OK']
        });
        (await loading).dismiss();
        await alert.present();
      }
    )
  }

  async getMyFollows(){
    let loading = this.loading.create({
      message: 'Please wait...'
    });
    (await loading).present();
    this._followService.getMyFollows(this.token).subscribe(
      async response => {
        console.log(response.follows)
        this.follows = response.follows;
        (await loading).dismiss();
      },
      async error =>{
        const alert = await this.alert.create({
          message: 'Ohh! Something gone wrong. 😥',
          buttons: ['OK']
        });
        (await loading).dismiss();
        await alert.present();
      }
    )
    
  }
}
