import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
import { User } from '../models/user';
import { AlertController, LoadingController, NavController, NavParams, ModalController } from '@ionic/angular';
import { Follow } from '../models/follow';
import { switchMap } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { FollowService } from '../services/follow.service';
import { environment } from 'src/environments/environment';
import { PublicationService } from '../services/publication.service'
import { Publication } from '../models/publication';
import { GoogleMaps, GoogleMap } from '@ionic-native/google-maps'
import { PublicationPage } from '../publication/publication.page'
declare var google;
import { OtherUserPage } from '../other-user/other-user.page'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  providers: [UserService, FollowService, PublicationService]
})
export class ProfilePage implements OnInit {
  public user: User;
  public identity;
  public token;
  public stats;
  public url;
  public followed = false;
  public following = false;
  public id: any;
  public publications: Array<any>
  public coords = [];
  public markers = [];
  public maps = [];
  public items_per_page;
  public page = 1;
  public total;
  public pages;
  public sub;
  public times = [];
  constructor(public navParams: NavParams, public modalController: ModalController, private _googleMaps: GoogleMaps, private _publicationService: PublicationService, public modal: ModalController, private _route: ActivatedRoute, private _router: Router, private _userService: UserService, private _followUser: FollowService, public alert: AlertController, public loading: LoadingController, public navCtrl: NavController) {

    /* this.sub = this._route.params.subscribe(params => {
      this.id = params.id;
      console.log(this.id);
    }); */
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = 'https://api-meet-sport.herokuapp.com/api';
    this.user = this.navParams.get('user');
  }

  ngOnInit(): void {
    /* this.getUser(this.user._id); */
    google.maps.event.addDomListener(window, 'load', this.getPublications(this.page));
    /* setTimeout(() => {
      this.getPublications(this.page);
    }, 3000); */
    /*  const loading = await this.loading.create();
     loading.present();
     
     this._route.paramMap.pipe(
       switchMap((params: ParamMap) => {
         return this._publicationService.getPublicationsUser(this.token, this.user._id, this.page)
       }) 
     ).subscribe(res => {
       
       this.coords = []; 
       this.total = res.total_items;
       this.pages = res.pages;
       this.items_per_page = res.items_per_page
       this.publications = res.publications
       for (let i = 0; i < this.publications.length; i++) {
         let cord = this.publications[i].location.split(',');
         let object = {
           lat: cord[0], lng: cord[1], zoom: 15
         }
         this.coords.push(object);
       }
       
       setTimeout(() => { 
         google.maps.event.addDomListener(window, 'load', this.initialize());
         loading.dismiss();
       },3000)
   }) */
  }

  getUser(id) {
    this._userService.getUser(id).subscribe(
      async response => {
        if (response.user) {
          console.log(response);
          this.user = response.user;
          console.log(this.user);
          if (response.following && response.following._id) {
            this.following = true;
          } else {
            this.following = false
          }

          if (response.followed && response.followed._id) {
            this.followed = true
          } else {
            this.followed = false
          }
        } else {
          const alert = await this.alert.create({
            message: 'Ohh! Something gone wrong. 😥',
            buttons: ['OK']
          });
          console.log('problemo')
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

  getCounters(id) {
    this._userService.getCounters(id).subscribe(
      response => {
        this.stats = response
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

  followUser(followed) {
    var follow = new Follow('', this.identity._id, followed);

    this._followUser.addFollow(this.token, follow).subscribe(
      response => {
        this.following = true;
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
    this._followUser.deleteFollow(this.token, followed).subscribe(
      response => {
        this.following = false;
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

  public followUserOver;
  mouseEnter(user_id) {
    this.followUserOver = user_id;
  }

  mouseLeave() {
    this.followUserOver = 0;
  }

  goBack() {
    this.modal.dismiss();
  }

  async getPublications(page, adding = false) {
    const loading = await this.loading.create();
    loading.present();
    this._publicationService.getPublicationsUser(this.token, this.user._id, page).subscribe(
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

  /*   initialize() {
      for (var i = 0, length = this.coords.length; i < length; i++) {
        var point = this.coords[i];
        var latlng = new google.maps.LatLng(point.lat, point.lng);
       
        this.maps[i] = new google.maps.Map(document.getElementById('map' + (i)), {
          zoom: point.zoom,
          center: latlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        google.maps.event.addListenerOnce(this.maps[i], 'idle', function () {
          
        });
        google.maps.event.addListenerOnce(this.maps[i], 'tilesloaded', function () {
          //this part runs when the mapobject is created and rendered
          console.log("hola");
          google.maps.event.addListenerOnce(this.maps[i], 'tilesloaded', function () {
            this.markers[i] = new google.maps.Marker({
              position: latlng,
              map: this.maps[i],
              title: 'Location'
            });
            console.log("holaaaa");
          });
        }); 
        
        
      }
      
       console.log(this.maps, this.markers) 
    } */

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
    console.log(this.maps, this.markers)
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

  async openPublication(publication) {
    const modal = await this.modalController.create({
      component: PublicationPage,
      componentProps: {
        'publication': publication,
      }
    });
    return await modal.present();
  }

  async goUser(u) {
    const modal = await this.modalController.create({
      component: OtherUserPage,
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