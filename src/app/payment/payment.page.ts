import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AppServiceService } from '../services/app-service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
payment:any = [];
  constructor(public loadingController: LoadingController, private service:AppServiceService) { }

  ngOnInit() :void {
    this.presentLoading().then(()=>{
      this.service.getAllPayments().subscribe((res)=>{
        this.payment = res.document.records;
        console.log(this.payment);
        this.loadingController.dismiss();
        
      })
    });
  }

  async presentLoading(){
    const loading = await this.loadingController.create({
      message: "S'il vous plaît, attendez...",
    });
    await loading.present();
  }

  presentModal(ev:any){

  }

}
