import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { ApiService} from  './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private api: ApiService

  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.router.navigateByUrl('login');
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.primerget();
    });
  }

  primerget(){
    const path = 'http://localhost:3800/api/home' ;
    return this.api.getPrueba();
  }
  sideMenu() {
    this.navigate =
      [
        {
          title: "Home",
          url: "/dashboard",
          icon: "home"
        },
        {
          title: "Chat",
          url: "/chat",
          icon: "chatboxes"
        },
        {
          title: "Contacts",
          url: "/contacts",
          icon: "contacts"
        },
      ]
  }
}
