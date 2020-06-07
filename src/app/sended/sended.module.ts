import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendedPageRoutingModule } from './sended-routing.module';

import { SendedPage } from './sended.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SendedPageRoutingModule
    ],
    declarations: [SendedPage]
})
export class SendedPageModule { }