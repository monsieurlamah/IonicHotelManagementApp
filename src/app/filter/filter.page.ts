import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {
  filters = {
    "meal_type":"lunch",
    "cuisine":"indian",
    "distance":5,
    "popular":true,
    "priceByOrder":"highToLow",
    "price":{
      "lowerPrice":"5",
      "higherPrice":"10",
    }
  }

  constructor() { }

  ngOnInit():void {
    ""
  }


  mealTypeChange(ev:any){
    console.log(ev.detail.value);
    const type = ev.detail.value;
    this.filters.meal_type = type;
    
  }

  cuisineTypeChange(ev:any){
    console.log(ev.detail.value);
    const type = ev.detail.value;
    this.filters.cuisine=type;
  }

  distanceTypeChange(ev:any){
    console.log(ev.detail.value);
    const type = ev.detail.value;
    this.filters.distance=type;
  }

  popularChange(ev:any){
    console.log(ev.detail.value);
    const type = ev.detail.value;
    this.filters.popular=type;
    
  }

  highLowChange(ev:any){
    console.log(ev.detail.value);
    const type = ev.detail.value;
    this.filters.priceByOrder=type;
  }
  priceChange(ev:any){
    console.log(ev.detail.value);
    const type = ev.detail.value;
    this.filters.price.lowerPrice=type.lower;
    this.filters.price.higherPrice=type.upper;
    console.log(this.filters.price);
  }

  reset(){
    this.filters = {
      "meal_type":"lunch",
    "cuisine":"indian",
    "distance":5,
    "popular":true,
    "priceByOrder":"highToLow",
    "price":{
      "lowerPrice":"5",
      "higherPrice":"10",
    }
    }
  }

  applyFilters(){
    console.log(this.filters);
    
  }
}
