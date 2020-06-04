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
  selector: 'app-sended',
  templateUrl: './sended.page.html',
  styleUrls: ['./sended.page.scss'],
  providers: [UserService, FollowService, MessageService]
})
export class SendedPage implements OnInit {
  public messages: Message[];
  public identity;
  public token;
  public url: string;
  public follows;
  public total;
  public page=1;
  constructor(public _messageService: MessageService, public navParams: NavParams, public modal: ModalController, private _route: ActivatedRoute, private _router: Router, private _userService: UserService, public alert: AlertController, public loading: LoadingController, public navCtrl: NavController, private _followService: FollowService) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = environment.apiUrl;
  }

  ngOnInit() {
    this.getMessages();
  }
  goBack() {
    this.modal.dismiss();
  }

  doInfinite() {
    if (this.messages.length == (this.total)) {
      
    } else {
      this.page++;
      this.getMessages(true);
    }
  }

  async getMessages(adding = false){
    let loading = this.loading.create({
      message: 'Please wait...'
    });
    (await loading).present();
    this._messageService.getMyMessages(this.token, this.page).subscribe(
      async response => {
        console.log(response)
        if (!response.messages) {
          
        }else{
          if (!adding) {
            this.messages = response.messages
            this.total = response.pages;
          } else {
            var arrayA = this.messages;
            var arrayB = response.messages;
            this.messages = arrayA.concat(arrayB);
          }
          }
        (await loading).dismiss();
      },
      async error => {
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
