import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public grandTotal !: number; 
  cartNumber:number = 0;

  constructor(private cartService : CartService, private firestore: AngularFirestore, public router: Router,private toster: ToastrService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res=>{
      this.grandTotal = this.cartService.getTotalPrice();
    })
    this.loadCart();
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

  public Total!: number; 

  onSubmit(form : NgForm){
    this.toster.success("Order Placed. We will update you about the delivery date.")
    let data = form.value;
    this.firestore.collection('Orders').add(data);
    form.reset();
    this.router.navigateByUrl('/');
  }

  emptyCart(){
    localStorage.removeItem('localCart');
    this.getCartDetails = [];
    this.cartNumber = 0;
    this.cartService.cartSubject.next(this.cartNumber);
  }

}

