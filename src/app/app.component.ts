import { Component, OnInit, DoCheck } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [UserService]
})
export class AppComponent implements OnInit, DoCheck {
  navigate: any;
  public identity;
  public url;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private _userService: UserService

  ) {
    this.sideMenu();
    this.initializeApp();
    this.url = environment.apiUrl;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.router.navigateByUrl('login');
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  /*  primerget(){
     const path = 'http://localhost:3800/api/home' ;
     return this.api.getPrueba();
   } */
  sideMenu() {
    this.navigate =
      [
        {
          title: "Home",
          url: "/",
          icon: "home"
        },
        {
          title: "Chat",
          url: "/chat",
          icon: "chatbubbles-outline"
        },
        {
          title: "User",
          url: "/user",
          icon: "person-circle-outline"
        },
      ]
  }

  ngOnInit() {
    this.identity = this._userService.getIdentity();
    console.log(this.identity);
  }

  ngDoCheck() {
    this.identity = this._userService.getIdentity();
  }

  logout(){
    localStorage.clear();
    this.identity = null;
    this.router.navigate(['/login']);
  }
}
