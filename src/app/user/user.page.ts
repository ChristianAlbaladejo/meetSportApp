import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { AlertController, LoadingController, NavController, ModalController } from '@ionic/angular';
import { UploadService } from '../services/upload.service';
import { environment } from 'src/environments/environment';
import { FollowFollowingPage } from '../follow-following/follow-following.page'
import { Camera, CameraOptions } from '@ionic-native/camera/ngx'
/* import { Plugins, CameraResultType, CameraSource} from '@capacitor/core'
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser'; */
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
  public stats;
  public mode = 'login';
  public image;

  constructor(private camera:Camera,public navCtrl: NavController, private modal: ModalController, private _route: ActivatedRoute, private _router: Router, private _userService: UserService, public alert: AlertController, public loading: LoadingController, private _uploadService: UploadService) {
    this.user = this._userService.getIdentity();
    this.identity = this.user;
    this.token = this._userService.getToken();
    this.editing = false;
    this.url = 'https://api-meet-sport.herokuapp.com/api';
    this.stats = this._userService.getStats();
  }

  ngOnInit() {
  }

  edit() {
    this.editing = true;
  }

  async getUser(id) {
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


  async save() {
    if (this.user.name == '' || this.user.surname == '' || this.user.nick == '' || this.user.email == '') {
      const alert = await this.alert.create({
        message: 'Ohh! Something gone wrong. 😥',
        buttons: ['OK']
      });
      this.getUser(this.identity._id);
      await alert.present();
    } else {
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
          } else {
            localStorage.setItem('identify', JSON.stringify(this.user));
            this.identity = this.user;
            this._uploadService.makeFileRequest(this.url + '/upload-image-user/' + this.user._id, [], this.filesToUpload, this.token, 'image').then((result: any) => {
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
  }

  async following() {
    const modal = await this.modal.create({
      component: FollowFollowingPage,
      componentProps: {
        'user': this.user,
      }
    });
    return await modal.present();
  }

  public filesToUpload: Array<File>;
  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);
  }

   async takePicture(){
    /* const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA
    }

    this.camera.getPicture(options).then((imageData)=> {
      this.image = 'data:image/jpeg;,' + imageData;
      console.log(this.image)
    
    }, async (err)=>{
        const alert = await this.alert.create({
          message: 'Ohh! Something gone wrong. 😥',
          buttons: ['OK']
        });
        await alert.present();
    }); */
    /* const {Camera} = Plugins;

    const result = await Camera.getPhoto({
      quality: 75,
      allowEditing: true,
      source: CameraSource.Camera,
      resultType: CameraResultType.Uri,
    })
     this.filesToUpload = <Array<File>><unknown>result;
     console.log(this.filesToUpload)
  }  */
   }
}
