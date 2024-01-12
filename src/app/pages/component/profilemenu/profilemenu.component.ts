import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-profilemenu',
  templateUrl: './profilemenu.component.html',
  styleUrls: ['./profilemenu.component.scss'],
})
export class ProfilemenuComponent  implements OnInit {

  constructor(private popoverControl : PopoverController) { }

  ngOnInit():void {
    ""
  }

  close(){
    this.popoverControl.dismiss();
  }

}
