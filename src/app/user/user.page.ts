import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { UploadService } from '../services/upload.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
  providers: [UserService, UploadService]
})
export class UserPage implements OnInit {

  public user: User;
  public identity;
  public token;
  public status: string;
  public editing: boolean;
  public imageFilePath;
  public url;

  constructor(private _route: ActivatedRoute, private _router: Router, private _userService: UserService, public alert: AlertController, public loading: LoadingController,private _uploadService: UploadService) { 
    this.user = this._userService.getIdentity();
    this.identity = this.user;
    this.token = this._userService.getToken();
    this.editing = false;
    this.url = environment.apiUrl;
  }

  ngOnInit() {
  }

  edit(){
    this.editing = true;
  }


  async save(){
    let loading = this.loading.create({
      message: 'Please wait...'
    });
    (await loading).present();
    this._userService.updateUser(this.user).subscribe(
      async response => {
        if (!response.user) {
          const alert = await this.alert.create({
            message: 'Ohh! Something gone wrong. 😥',
            buttons: ['OK']
          });
          await alert.present();
        }else {
          localStorage.setItem('identify', JSON.stringify(this.user));
          this.identity = this.user;
          this._uploadService.makeFileRequest(this.url+'/upload-image-user/'+this.user._id, [], this.filesToUpload, this.token, 'image').then((result: any)=>{
            console.log(result);
            this.user.image = result.user.image;
            localStorage.setItem('identify', JSON.stringify(this.user));
          });
        }
        (await loading).dismiss();
      },
      async error => {
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
    this.editing = false;
  }

  public filesToUpload: Array<File>;
  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);
  }

}
