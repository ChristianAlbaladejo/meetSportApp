import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular'

import { AddPage } from '../../add/add.page';
import { ReceivedPage } from '../../received/received.page';
import { SendedPage } from '../../sended/sended.page';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  constructor(public nav:NavController, public modal: ModalController) { }

  ngOnInit() {
  }

  async sendPage(){
    const modal = await this.modal.create({
      component: AddPage,
      componentProps: {}
    });
    return await modal.present();
  }

  async receivedPage(){
    const modal = await this.modal.create({
      component: ReceivedPage ,
      componentProps: {}
    });

    return await modal.present();
  }

  async sendedPage(){
    const modal = await this.modal.create({
      component: SendedPage,
      componentProps: {}
    });

    return await modal.present();
  }

}
