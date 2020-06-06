import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendedPage } from './sended.page';

const routes: Routes = [
  {
    path: '',
    component: SendedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendedPageRoutingModule {}
