import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { User } from '../models/user'
import { Follow } from '../models/follow';
import { Publication } from '../models/publication';
import { UserService } from '../services/user.service'
import { environment } from 'src/environments/environment';
import { AlertController, LoadingController, NavController, ModalController } from '@ionic/angular'
import { FollowService } from '../services/follow.service'
import { PublicationService } from '../services/publication.service'
import { GoogleMaps, GoogleMap } from '@ionic-native/google-maps'
import { PublicationPage } from '../publication/publication.page'
import { OtherUserPage } from '../other-user/other-user.page'
import { MenuController } from '@ionic/angular';
import { ProfilePage } from '../profile/profile.page'
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
  public publications: Array<any>
  public coords = [];
  public markers = [];
  public maps = [];
  public items_per_page;
  public times = [];

  constructor(public menuCtrl: MenuController, public modalController: ModalController, private _publicationService: PublicationService, private _route: ActivatedRoute, private _router: Router, private _userService: UserService, public alert: AlertController, public loading: LoadingController, public navCtrl: NavController, private _followService: FollowService, private _googleMaps: GoogleMaps) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = 'https://api-meet-sport.herokuapp.com/api';
    console.log(this.identity._id)
  }
  ngOnInit(): void {
    this.getPublications(this.page);
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  async getPublications(page, adding = false) {
    const loading = await this.loading.create();
    loading.present();
    this._publicationService.getPublications(this.token, page).subscribe(
      response => {
        if (response.publications) {
          this.coords = [];
          this.total = response.total_items;
          this.pages = response.pages;
          this.items_per_page = response.items_per_page
          if (!adding) {
            this.publications = response.publications
            for (let i = 0; i < this.publications.length; i++) {
              let cord = this.publications[i].location.split(',');
              let time = this.publications[i].date.split(',');

              let object2 = {
                date: time[0], hour: time[1].substr(12).slice(0, 5)
              }
              
              let object = {
                lat: cord[0], lng: cord[1], zoom: 15
              }
              this.coords.push(object);
              this.times.push(object2);
            }
            setTimeout(() => {
              this.initialize();
              loading.dismiss();
            }, 3000);
          } else {
            var arrayA = this.publications;
            var arrayB = response.publications;
            this.publications = arrayA.concat(arrayB);
            console.log(this.publications)
            for (let i = 0; i < this.publications.length; i++) {
              let cord = this.publications[i].location.split(',');
              let time = this.publications[i].date.split(',');
              let object = {
                lat: cord[0], lng: cord[1], zoom: 15
              }
              let object2 = {
                date: time[0], hour: time[1]
              }
              this.coords.push(object);
              this.times.push(object2);
            }
            setTimeout(() => {
              this.initialize();
              loading.dismiss();
            }, 3000);
          }
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
    this._publicationService.deletePublication(this.token, p).subscribe(
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
  }

  initialize() {
    for (var i = 0, length = this.coords.length; i < length; i++) {
      var point = this.coords[i];
      var latlng = new google.maps.LatLng(point.lat, point.lng);
      this.maps[i] = new google.maps.Map(document.getElementById('map' + (i)), {
        zoom: point.zoom,
        center: latlng,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        gestureHandling: 'none',
      });
      this.markers[i] = new google.maps.Marker({
        position: latlng,
        map: this.maps[i]
      });
    }
  }

  addPublication() {
    this._router.navigate(['/add-publication']);
  }

  doInfinite(infiniteScroll) {
    if (this.publications.length == (this.total)) {
      infiniteScroll.target.complete();
    } else {
      this.page++;
      this.getPublications(this.page, true).then(result => infiniteScroll.target.complete());
    }
  }

  doRefresh(event) {
    this.page = 1
    this.getPublications(this.page, false).then(result => event.target.complete());
  }

  async openPublication(publication,t) {
    const modal = await this.modalController.create({
      component: PublicationPage,
      componentProps: {
        'publication': publication,
        'times': t
      }
    });
    modal.onDidDismiss().then(() => {
      this.page = 1;
      this.getPublications(this.page);
    });

    return await modal.present();
  }

  async openUser(u) {
    const modal = await this.modalController.create({
      component: ProfilePage,
      componentProps: {
        'user': u,
      }
    });

    return await modal.present();
  }

  like(publication) {
    this.identity = this._userService.getIdentity();
    this._publicationService.like(this.token, publication).subscribe(
      async response => {
        if (!response) {
          const alert = await this.alert.create({
            message: 'Ohh! Something gone wrong. 😥',
            buttons: ['OK']
          });
          await alert.present();
        } else {
          for (let i = 0; i < this.publications.length; i++) {
            if (this.publications[i]._id == publication._id) {
              this.publications[i].like.push(this.identity._id)
              console.log(this.publications[i].like)

            }

          }
          console.log(this.identity._id)
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

  dislike(publication) {
    this.identity = this._userService.getIdentity();
    this._publicationService.dislike(this.token, publication).subscribe(
      async response => {
        if (!response) {
          const alert = await this.alert.create({
            message: 'Ohh! Something gone wrong. 😥',
            buttons: ['OK']
          });
          await alert.present();
        } else {
          for (let i = 0; i < this.publications.length; i++) {
            if (this.publications[i]._id == publication._id) {
              var indice = this.publications[i].like.indexOf(this.identity._id); 
              this.publications[i].like.splice(indice, 1); 
            }
          }
          
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

  checkIfExists(p) {
    if (p.like.includes(this.identity._id)) {

      return true;

    } else {

      return false;
    }
  }
}
