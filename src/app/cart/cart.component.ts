import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products: any = []; 
  public grandTotal !: number; 
  getCartDetails:any=[];
  cartNumber:number = 0;
  constructor(private cartSevices: CartService) { }

  ngOnInit(): void {
    // this.cartService.getProducts().subscribe(res=>{
    //   this.products = res;
    //   this.grandTotal = this.cartService.getTotalPrice();
    // })
    this.CartDetails();
    this.loadCart();
  }

  removeItem(item:any){
    // this.cartService.removeCartItem(item);
    // console.log(item);
    if(localStorage.getItem('localCart')){
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart')!);
      for(let i=0;i<this.getCartDetails.length;i++){
        if(this.getCartDetails[i].prodId === item){
          this.getCartDetails.splice(i, 1);
          localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
          this.loadCart();
          this.cartItemFunc();
        }
      }
    }
  }

  emptyCart(){
    // this.cartService.removeAllCart();
    localStorage.removeItem('localCart');
    this.getCartDetails = [];
    this.cartNumber = 0;
    this.cartSevices.cartSubject.next(this.cartNumber);
  }

  
  cartItemFunc(){
    if(localStorage.getItem('localCart') != null){
      var cartCount = JSON.parse(localStorage.getItem('localCart')!);
      this.cartNumber = cartCount.length;
      this.cartSevices.cartSubject.next(this.cartNumber);
    }
  } 
  
  CartDetails(){
    if(localStorage.getItem('localCart')){
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart')!);
    }
  }

  loadCart(){
    if(localStorage.getItem('localCart')){
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart')!)
      this.grandTotal = this.getCartDetails.reduce(function(acc:any, val:any){
          return acc + (val.amt * val.qnt);
      },0);
    }
  }
}
