import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-coupan',
  templateUrl: './coupan.component.html',
  styleUrls: ['./coupan.component.scss'],
})
export class CoupanComponent  implements OnInit {
  coupanCode:any;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit():void {
    ""
  }

  dismiss(){
    this.modalCtrl.dismiss({
      "code":"",
    })
  }

  apply(){
    this.modalCtrl.dismiss({})
  }

}
