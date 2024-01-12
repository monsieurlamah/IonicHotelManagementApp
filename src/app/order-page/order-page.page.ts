import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../services/app-service.service';
import { LoadingController, ModalController } from '@ionic/angular';
import { CoupanComponent } from '../pages/components/coupan/coupan.component';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.page.html',
  styleUrls: ['./order-page.page.scss'],
})
export class OrderPagePage implements OnInit {
  orders:any =[]; 
  total_amt:any = 0;
  totalItemPrice:any;
  constructor(private service : AppServiceService, public loadingController : LoadingController, private modalCtrl: ModalController) { }

  ngOnInit():void {
    this.presentLoading().then(()=>{
      this.service.getAllYourOrders().subscribe((res)=>{
        this.orders = res.document.records;
        console.log(this.orders);
        this.loadingController.dismiss();
        this.total();
        
      })
    })
  }

  async presentLoading(){
    const loading = await this.loadingController.create({
      message: "Veuillez patienter..."
    });

    await loading.present();
  }

  deleteItem(i:any){
    this.orders = this.orders.filter((item: { id: any; }) => item.id !== i)
  }

  remove(id:any){
    console.log(id);
    if (this.orders[id].qty > 1) {
      console.log(this.orders[id].qty);
      this.orders[id].qty = this.orders[id].qty - 1;
      this.total_amt = this.total_amt - this.orders[id].amount;
      this.removeItemPrice(this.orders[id].qty, this.orders[id].amount, this.orders[id].title)
    }else{
      this.orders[id].qty = 1;
    }
    
  }

  removeItemPrice(qty:number, amt:number, title:string){
    console.log(qty, amt, title);
    this.totalItemPrice = (qty * amt).toFixed(2);
    console.log(this.totalItemPrice);
    
    

  }

  add(id:any){
    // console.log(id);
    console.log(this.orders[id].qty);
    this.orders[id].qty = this.orders[id].qty + 1;
    this.total_amt = this.total_amt + this.orders[id].amount;
    this.itemPrice(this.orders[id].qty, this.orders[id].amount, this.orders[id].title)
  }

  itemPrice(qty:number, amt:number, title:string){
    console.log(qty, amt, title);
    this.totalItemPrice = (qty * amt).toFixed(2)
    console.log(this.totalItemPrice);
  }

  total(){
    for (let i = 0; i < this.orders.length; i++){
      this.total_amt = this.total_amt + this.orders[i].amount;
    }
  }

  moreItems(){

  }

  async editCoupan(ev:any){
    const modal = await this.modalCtrl.create({
      component: CoupanComponent,
      showBackdrop:true,
      backdropDismiss:true,
      animated: true,
      swipeToClose:true,
      mode: "ios",
      keyboardClose:true,
      componentProps:{
        "name":"Yamini",
        "city":"Nanded",
      },
      cssClass: "my-modal"
    });
    return await modal.present();
  }

  orderDetails(){

  }
}
