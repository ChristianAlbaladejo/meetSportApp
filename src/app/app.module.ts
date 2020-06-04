import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MomentModule } from 'ngx-moment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { HttpClientModule, } from '@angular/common/http'

import { PublicationPage } from './publication/publication.page'
import { ProfilePage } from './profile/profile.page'
import { FollowFollowingPage } from './follow-following/follow-following.page'
import { OtherUserPage } from './other-user/other-user.page'
/* import {MessagesModule} from './messages/messages.module' */
import { ReceivedPage } from './received/received.page';
import { AddPage } from './add/add.page';
import { SendedPage } from './sended/sended.page';

@NgModule({
  declarations: [AppComponent, PublicationPage, ProfilePage, FollowFollowingPage, OtherUserPage, ReceivedPage, AddPage, SendedPage],
  entryComponents: [PublicationPage, ProfilePage, FollowFollowingPage, OtherUserPage, ReceivedPage, AddPage, SendedPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule, MomentModule],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
