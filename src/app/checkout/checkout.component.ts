import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public grandTotal !: number; 

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res=>{
      this.grandTotal = this.cartService.getTotalPrice();
    })
    this.loadCart();
  }

  onSubmit(){
    console.log("hii");
  }

  getCartDetails:any=[];
  loadCart(){
    if(localStorage.getItem('localCart')){
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart')!)
      this.grandTotal = this.getCartDetails.reduce(function(acc:any, val:any){
          return acc + (val.amt * val.qnt);
      },0);
    }
  }

}

