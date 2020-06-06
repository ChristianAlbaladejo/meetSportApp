import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FollowFollowingPage } from './follow-following.page';

const routes: Routes = [
  {
    path: '',
    component: FollowFollowingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FollowFollowingPageRoutingModule {}
