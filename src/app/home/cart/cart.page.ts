import { Component, OnInit } from '@angular/core';
import { CatDetailService } from "../categorias/cat-detail/cat-detail.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  prod: any;
  private count: any;
  private total: any;

  constructor(private catDetailService: CatDetailService) { 
    this.catDetailService.getProducts();
  }

  ngOnInit() {
    this.prod = this.catDetailService.getProducts();
    this.count = 1;
  }

  add(x,y){
    this.total = y;
    if(x===1){
      if(this.count < 10 ){
        this.count++;
      }      
    }
    if(x===2){
      if(this.count >= 1 ){
        this.count--;
      }
    }
    this.total = this.total * this.count;
  }

}
