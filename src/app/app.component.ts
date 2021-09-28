import { Component } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foodOrdering';

  public totalItem: number = 0;

  ngOnInit(): void{
    this.cartItemFunc();
  }

  constructor(private cartSevices: CartService) {
    this.cartSevices.getProducts().subscribe(res=>{
      this.totalItem = res.length;
      this.cartSevices.cartSubject.subscribe((data)=>{
        this.cartNumber = data;
      })
    })
  }

  cartNumber:any;
  cartItemFunc(){
    if(localStorage.getItem('localCart') != null){
      var cartCount = JSON.parse(localStorage.getItem('localCart')!);
      this.cartNumber = cartCount.length;
      this.cartSevices.cartSubject.next(this.cartNumber);
    }
  } 
}

