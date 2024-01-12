import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent  implements OnInit {

  constructor(private modalCtrl : ModalController) { }

  ngOnInit():void {
    ""
  }
  dismiss(){
    this.modalCtrl.dismiss({
      "name":"Laxmi",
      "city":"Degloor"
    })
  }
}
