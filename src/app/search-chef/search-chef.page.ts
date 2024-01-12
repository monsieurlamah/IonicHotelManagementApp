import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { ProfileComponent } from '../pages/component/profile/profile.component';
import { ProfilemenuComponent } from '../pages/component/profilemenu/profilemenu.component';

@Component({
  selector: 'app-search-chef',
  templateUrl: './search-chef.page.html',
  styleUrls: ['./search-chef.page.scss'],
})
export class SearchChefPage implements OnInit {
data = [
  {
    "image_id":"01",
    "image":"001.JPG"
  },
  {
    "image_id":"02",
    "image":"002.JPG"
  },
  {
    "image_id":"03",
    "image":"003.JPG"
  },
  {
    "image_id":"04",
    "image":"004.JPG"
  },
  {
    "image_id":"05",
    "image":"005.JPG"
  },
  {
    "image_id":"06",
    "image":"006.JPG"
  },
  {
    "image_id":"07",
    "image":"007.JPG"
  },
  {
    "image_id":"08",
    "image":"008.JPG"
  },
]
  constructor(private modalCtrl : ModalController, private popover : PopoverController) {

   }

  ngOnInit():void {
    ""
  }

  notificationModal(ev:any){

  }

  async presentModal(ev:any){
    const modal = await this.modalCtrl.create({
      component:ProfileComponent,
      showBackdrop:true,
      backdropDismiss:true,
      animated:true,
      swipeToClose: true,
      canDismiss:true,
      mode:'ios',
      keyboardClose:true,
      componentProps:{
        "name": "Yamini",
        "city": "Nanded"
      },
      cssClass:"my-modal"

    });
    return await modal.present()
  }

  async presentPopover(ev:any){
    const popover = await this.popover.create({
      component:ProfilemenuComponent,
      event:ev,
      mode: 'ios',
      translucent:true
    })
    await popover.present();
  }
}
