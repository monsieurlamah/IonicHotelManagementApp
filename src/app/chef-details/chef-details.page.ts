import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AppServiceService } from '../services/app-service.service';

@Component({
  selector: 'app-chef-details',
  templateUrl: './chef-details.page.html',
  styleUrls: ['./chef-details.page.scss'],
})
export class ChefDetailsPage implements OnInit {
user :any = [];
segId :string = "services";
dish:any = [];
orders:any=[];

  constructor(public loadingController:LoadingController, private service:AppServiceService) { }

  ngOnInit():void {
    this.presentLoading().then(()=>{


      this.service.getAllMenuDishes().subscribe((res)=>{
        this.user = res.document.records
        console.log(this.user);
        this.loadingController.dismiss();
        
      });

      this.service.getAllDishes().subscribe((res)=>{
        this.dish = res.document.records;
        console.log(this.dish);
      });

      this.service.getAllOrders().subscribe((res)=>{
        this.orders =  res.document.records;
        console.log(this.orders);
        
      });
    });
  }

  async presentLoading(){
    const loading = await this.loadingController.create({
      message:"Patientez, s'il vous plaît..."
    });
    await loading.present();
  }

  segmentChanged(ev:any){
    this.segId = ev.detail.value;
  }

  goToEvent(){

  }

  presentPopover(ev:any){

  }

  presentActionSheet(){
    
  }
}
