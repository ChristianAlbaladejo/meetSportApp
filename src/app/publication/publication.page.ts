import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { User } from '../models/user'
import { Follow } from '../models/follow';
import { Publication } from '../models/publication';
import { UserService } from '../services/user.service'
import { environment } from 'src/environments/environment';
import { AlertController, LoadingController, NavController, NavParams, ModalController, Platform } from '@ionic/angular'
import { FollowService } from '../services/follow.service'
import { PublicationService } from '../services/publication.service'
import { GoogleMaps, GoogleMap } from '@ionic-native/google-maps';
import { Observable } from "rxjs/Observable";
import { fromPromise } from "rxjs/observable/fromPromise";
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from "@ionic-native/file";
import { AndroidPermissions } from '@ionic-native/android-permissions';
declare var google;
@Component({
  selector: 'app-publication',
  templateUrl: './publication.page.html',
  styleUrls: ['./publication.page.scss'],
  providers: [UserService, FollowService, PublicationService]
})
export class PublicationPage implements OnInit {
  public identity;
  public token;
  public url;
  public publication;
  public times;
  mapRef = null;
  constructor(public modalController: ModalController, private _publicationService: PublicationService, public navParams: NavParams, private _route: ActivatedRoute, private _router: Router, private _userService: UserService, public alert: AlertController, public loading: LoadingController, public navCtrl: NavController, private _followService: FollowService, private _googleMaps: GoogleMaps) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = 'https://api-meet-sport.herokuapp.com/api';
    this.publication = this.navParams.get('publication');
    this.times = this.navParams.get('times');
    console.log(this.times)

  }
  ngOnInit() {

  }
  ionViewDidEnter() {
    this.loadMap()
  }
  goBack() {
    this.modalController.dismiss();
  }

  async loadMap() {
    let cord = this.publication.location.split(',');
    let object = {
      lat: cord[0], lng: cord[1]
    }
    var latlng = new google.maps.LatLng(object.lat, object.lng);
    const myLatLng = latlng;
    const mapEle: HTMLElement = document.getElementById('map');
    this.mapRef = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
    const marker = new google.maps.Marker({
      position: latlng,
      map: this.mapRef,
      animation: google.maps.Animation.DROP
    });
  }

  async delete() {
    let alert = this.alert.create({
      header: 'Confirm delete publication',
      message: 'Are you sure you want to delete the publication?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {

          }
        },
        {
          text: 'Accept',
          handler: () => {
            this._publicationService.deletePublication(this.token, this.publication._id).subscribe(
              response => {
                if (response.publications) {
                } else {
                  
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
            this.modalController.dismiss();
          }
        }
      ]
    });
    (await alert).present();
  }

}
