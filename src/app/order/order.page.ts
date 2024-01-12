import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { OrderMenuPage } from '../pages/popup/order-menu/order-menu.page';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
orders = [
  {
  "date": "Today , 23 Auf 1980",
  "order":[
  {
    "id":"01",
    "image":"001.JPG",
    "title":"Hamburger",
    "amount":"55.40",
    "transId":"58745212",
    "time":"20 Min",
    "status":"CONFIRM"
  },
  {
    "id":"02",
    "image":"002.JPG",
    "title":"Deep dish pizza",
    "amount":"48.50",
    "transId":"45784125",
    "time":"45 Min",
    "status":"CANCELLED"
  },
  {
    "id":"03",
    "image":"003.JPG",
    "title":"Bacon wrapped shrimp",
    "amount":"23.04",
    "transId":"23081980",
    "time":"10 Min",
    "status":"CONFIRM"
  },

]
},
{
  "date": "01 Jully 1982",
  "order":[
  {
    "id":"04",
    "image":"004.JPG",
    "title":"Hamburger",
    "amount":"55.40",
    "transId":"58745212",
    "time":"26 Min",
    "status":"CONFIRM"
  },
  {
    "id":"05",
    "image":"005.JPG",
    "title":"Deep dish pizza",
    "amount":"48.50",
    "transId":"45784125",
    "time":"30 Min",
    "status":"CANCELLED"
  },
  {
    "id":"06",
    "image":"006.JPG",
    "title":"Bacon wrapped shrimp",
    "amount":"23.04",
    "transId":"23081980",
    "time":"05 Min",
    "status":"CONFIRM"
  },

]
},
{
  "date": "30 Dec 1993",
  "order":[
  {
    "id":"07",
    "image":"007.JPG",
    "title":"Hamburger",
    "amount":"55.40",
    "transId":"58745212",
    "time":"26 Min",
    "status":"CONFIRM"
  },
  {
    "id":"08",
    "image":"008.JPG",
    "title":"Deep dish pizza",
    "amount":"48.50",
    "transId":"45784125",
    "time":"1 Hour",
    "status":"CANCELLED"
  },
  {
    "id":"03",
    "image":"003.JPG",
    "title":"Bacon wrapped shrimp",
    "amount":"23.04",
    "transId":"23081980",
    "time":"10 Min",
    "status":"CANCELLED"
  },

]
}
] 
  constructor(public popoverController: PopoverController) { }

  ngOnInit() :void {
    ""
  }

  segmentChanged(ev:any){
    console.log(ev.detail.value);
  }

  async presentPopover(ev:any){
    const popover = await this.popoverController.create({
      component: OrderMenuPage, 
      event:ev,
      mode: 'ios',
      translucent:true ,
      
    });

    await popover.present();
  }
}
