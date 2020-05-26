import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { User } from '../models/user'
import { Follow } from '../models/follow';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Publication } from '../models/publication';
import { UserService } from '../services/user.service'
import { environment } from 'src/environments/environment';
import { AlertController, LoadingController, NavController, IonInfiniteScroll, ToastController  } from '@ionic/angular'
import { FollowService } from '../services/follow.service'
import { GoogleMaps, GoogleMap } from '@ionic-native/google-maps'
import { PublicationService } from '../services/publication.service'
import { UploadService } from '../services/upload.service';
declare var google;
/* declare var marker; */
@Component({
  selector: 'app-add-publication',
  templateUrl: './add-publication.page.html',
  styleUrls: ['./add-publication.page.scss'],
  providers: [UserService, FollowService, PublicationService, UploadService]
})
export class AddPublicationPage implements OnInit {
  mapRef = null;
  public identity;
  public token;
  public url
  public latitude;
  public longitude;
  public marker;
  public date;
  public time;
  public publication: Publication;
  
  constructor(private _uploadService: UploadService,public toastController: ToastController, private _route: ActivatedRoute, private ngZOne: NgZone, private _router: Router, private _userService: UserService, public alert: AlertController, public loading: LoadingController, public navCtrl: NavController, private _followService: FollowService, private _googleMaps: GoogleMaps, private geolocation: Geolocation, public _publicationService: PublicationService) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = environment.apiUrl;
    this.publication = new Publication("", "", "", "","" ,this.identity._id, "", "");
  }

  ngOnInit() {
    this.loadMap()
  }

  async loadMap() {
    const loading = await this.loading.create();
    loading.present();
    const myLatLng = await this.getLocation();
    this.latitude = myLatLng.lat;
    this.longitude = myLatLng.lng;
    const mapEle: HTMLElement = document.getElementById('map');
    this.mapRef = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
    google.maps.event
      .addListenerOnce(this.mapRef, 'idle', () => {
        loading.dismiss();
        this.addMaker(myLatLng.lat, myLatLng.lng);
      });

  }
  private addMaker(lat: number, lng: number) {
    const marker = new google.maps.Marker({
      position: { lat, lng },
      draggable: true,
      animation: google.maps.Animation.DROP,
      map: this.mapRef,
      title: 'Hello World!'
    });
    this.marker = marker;
    console.log(this.latitude, this.longitude);
  }

  private async getLocation() {
    const rta = await this.geolocation.getCurrentPosition();
    return {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
  }

  cancel() {
    this._router.navigate(['/']);
  }

  save() {
    console.log(this.marker.getPosition().lat(), this.marker.getPosition().lng(),this.publication)
    this.publication.location = this.marker.getPosition().lat() +','+ this.marker.getPosition().lng();
    this.publication.date = this.date+ ', '+this.time;
    console.log(this.publication);
    this._publicationService.addPublication(this.token, this.publication).subscribe(
      async response => {
        if (response.publication) {
        const toast = await this.toastController.create({
          message: 'Your publication have been saved.',
          duration: 3500,
          color: 'success'
        });
        toast.present();
      }else{
          const toast = await this.toastController.create({
            message: 'Your publication have not been saved.',
            duration: 3500,
            color: 'danger'
          });
          toast.present();
      }
      },
      async error => {
        const toast = await this.toastController.create({
          message: 'Your settings have not been saved.',
          duration: 3500,
          color: 'danger'
        });
        toast.present();
      }
    )
    this._router.navigate(['/']);
  }

  public filesToUpload: Array<File>;
  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);
  }

}
