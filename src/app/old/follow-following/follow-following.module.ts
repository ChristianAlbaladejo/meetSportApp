import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FollowFollowingPageRoutingModule } from './follow-following-routing.module';

import { FollowFollowingPage } from './follow-following.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FollowFollowingPageRoutingModule
  ],
  declarations: [FollowFollowingPage]
})
export class FollowFollowingPageModule {}
