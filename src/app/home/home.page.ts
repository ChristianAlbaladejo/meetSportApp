import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { User } from '../models/user'
import { Follow } from '../models/follow';
import { Publication } from '../models/publication';
import { UserService } from '../services/user.service'
import { environment } from 'src/environments/environment';
import { AlertController, LoadingController, NavController, IonInfiniteScroll } from '@ionic/angular'
import { FollowService } from '../services/follow.service'
import { PublicationService } from '../services/publication.service'
import { GoogleMaps, GoogleMap } from '@ionic-native/google-maps'
declare var google;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [UserService, FollowService, PublicationService]
})
export class HomePage implements OnInit {
  public identity;
  public token;
  public url;
  public page = 1;
  public total;
  public pages;
  public publications: Publication[];
  public coords = [];
  public markers = [];
  public maps = []

  constructor(private _publicationService: PublicationService, private _route: ActivatedRoute, private _router: Router, private _userService: UserService, public alert: AlertController, public loading: LoadingController, public navCtrl: NavController, private _followService: FollowService, private _googleMaps: GoogleMaps) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = environment.apiUrl;
  }
  ngOnInit(): void {
    this.getPublications(this.page);
  }

  async getPublications(page) {
    const loading = await this.loading.create();
    loading.present();
    this._publicationService.getPublications(this.token, page).subscribe(
      response => {
        if (response.publications) {
          this.total = response.total_items;
          this.pages = response.pages;
          this.publications = response.publications
          for (let i = 0; i < this.publications.length; i++) {
            let cord = this.publications[i].location.split(',');
            let object = {
              lat: cord[0], lng: cord[1], zoom: 17
            }
            this.coords.push(object);
          }
          setTimeout(() => {
            this.initialize();
            loading.dismiss();
          }, 3000);
          

        } else {
          //Mostrar el div que no tienes publications
          loading.dismiss();
        }
      },
      async error => {
        const alert = await this.alert.create({
          message: 'Ohh! Something gone wrong. 😥',
          buttons: ['OK']
        });
        loading.dismiss();
        await alert.present();
      }
    )
  }

  delete(p) {
    console.log(p);
    this._publicationService.deletePublication(this.token, p).subscribe(
      response => {
        if (response.publications) {
          console.log("bien")

        } else {
          console.log("bien")
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

  initialize() {
    for (var i = 0, length = this.coords.length; i < length; i++) {
      var point = this.coords[i];
      var latlng = new google.maps.LatLng(point.lat, point.lng);

      this.maps[i] = new google.maps.Map(document.getElementById('map' + (i)), {
        zoom: point.zoom,
        center: latlng
      });
      console.log(this.maps[i])
      this.markers[i] = new google.maps.Marker({
        position: latlng,
        map: this.maps[i]
      });
    }
  }

  addPublication() {
    this._router.navigate(['/add-publication']);
  }

}
