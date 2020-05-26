import { Component, OnInit, AfterViewInit, ElementRef, ViewChild  } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
import { User } from '../models/user';
import { AlertController, LoadingController, NavController, NavParams, ModalController, Platform } from '@ionic/angular';
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

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  providers: [UserService, FollowService, PublicationService]
})
export class ProfilePage implements OnInit, AfterViewInit {
  public user;
  public identity;
  public token;
  public stats;
  public url;
  public followed = false;
  public following = false;
  public id: any;
  public publications: Publication[];
  public coords = [];
  public markers = [];
  public maps = [];
  public items_per_page;
  public page;
  public total;
  public pages;
  public sub;
  constructor(public modalController: ModalController, private _googleMaps: GoogleMaps, private _publicationService: PublicationService, public modal: ModalController, private _route: ActivatedRoute, private _router: Router, private _userService: UserService, private _followUser: FollowService, public alert: AlertController, public loading: LoadingController, public navCtrl: NavController) {
    
    this.sub = this._route.params.subscribe(params => {
      this.id = params.id;
      console.log(this.id);
    });
    console.log(this.id, this.sub)
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = environment.apiUrl;
    /*    this.user = this.navParams.get('user');  */
    this.page = 1;

  }

  async ngOnInit() {
    const loading = await this.loading.create();
    loading.present();
    this._route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this._publicationService.getPublicationsUser(this.token, this.id, this.page)
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
      console.log(this.coords)
      setTimeout(() => { 
        google.maps.event.addDomListener(window, 'load', this.initialize());
        loading.dismiss();
      },3000)
  })
}

  ngAfterViewInit() {
  }

  ionViewDidEnter() {
    /* this.getPublications(this.page); */
    /* this.getUser(this.user._id); */
    /* this.getPublications(this.page); */
  }

  loadmap(){
    this.getPublications(this.page);
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
    console.log(this.id);
    this._publicationService.getPublicationsUser(this.token,this.id ,page).subscribe(
      response => {
        console.log(response);
        if (response.publications) {
          this.coords = [];
          this.total = response.total_items;
          this.pages = response.pages;
          this.items_per_page = response.items_per_page
          if (!adding) {
            this.publications = response.publications
            for (let i = 0; i < this.publications.length; i++) {
              let cord = this.publications[i].location.split(',');
              let object = {
                lat: cord[0], lng: cord[1], zoom: 15
              }
              this.coords.push(object);
            }
            setTimeout(() => {
            for (var i = 0, length = this.coords.length; i < length; i++) {
              var point = this.coords[i];
              var latlng = new google.maps.LatLng(point.lat, point.lng);
              console.log(point, latlng, document.getElementById('map' + (i)))
              this.maps[i] = new google.maps.Map(document.getElementById('map' + (i)), {
                zoom: point.zoom,
                center: latlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP
              });
              this.markers[i] = new google.maps.Marker({
                position: latlng,
                map: this.maps[i],
                title: 'Location'
              });
            }

            loading.dismiss();
            }, 3000);
            /* setTimeout(() => {
              this.initialize();
              loading.dismiss();
            }, 10000); */
          } else {
            var arrayA = this.publications;
            var arrayB = response.publications;
            this.publications = arrayA.concat(arrayB);
            console.log(this.publications)
            for (let i = 0; i < this.publications.length; i++) {
              let cord = this.publications[i].location.split(',');
              let object = {
                lat: cord[0], lng: cord[1], zoom: 15
              }
              this.coords.push(object);
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

  initialize() {
    
    for (var i = 0, length = this.coords.length; i < length; i++) {
      var point = this.coords[i];
      var latlng = new google.maps.LatLng(point.lat, point.lng);
      console.log(point, latlng, document.getElementById('map' + (i)))
      this.maps[i] = new google.maps.Map(document.getElementById('map' + (i)), {
        zoom: point.zoom,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      google.maps.event.addListenerOnce(this.maps[i], 'idle', function () {
        console.log("holaaaaaaaaaaaaaaaaaaaaaaaaa");
      });
      /* google.maps.event.addListenerOnce(this.maps[i], 'tilesloaded', function () {
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
      }); */
      
      
    }
    
   /*  console.log(this.maps, this.markers) */
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

}
