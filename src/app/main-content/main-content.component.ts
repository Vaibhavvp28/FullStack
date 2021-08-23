import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  constructor(private cartService : CartService) { }
  
  ngOnInit(): void {
  
  }
  isDisplay = true;
  toggleDisplay(){
    this.isDisplay = !this.isDisplay;
  }

  productArray = [     
    {
      prodId: 1,
      img: 'assets/med/1.jpg',
      general: "GENERAL",
      prodName: "Calvirich Calcium Supplement Suspension 200 Ml",
      amt: 33,
      qnt: 1
    },
    {
      prodId: 2,
      img: 'assets/med/2.jpg',
      amt: 24,
      general: "GENERAL",
      prodName: "Dolram-Plus",
      qnt: 1
    },
    {
      prodId: 3,
      img: 'assets/med/3.jpg',
      amt: 7,
      general: "GENERAL",
      prodName: "Fluxirix-20 Antidepressant Capsules",
      qnt: 1
    },
    {
      prodId: 4,
      img: 'assets/med/4.jpg',
      general: "GENERAL",
      prodName: "Glyzet-m1-Sr-Forte",
      amt: 20,
      qnt: 1
    },
    {
      prodId: 5,
      img: 'assets/med/5.jpg',
      general: "GENERAL",
      prodName: "Glyzet-m1 Tablet",
      amt: 20,
      qnt: 1
    },
    {
      prodId: 6,
      img: 'assets/med/6.jpg',
      general: "GENERAL",
      prodName: "Hypermist-1",
      amt: 15,
      qnt: 1
    },
    {
      prodId: 7,
      img: 'assets/med/7.jpg',
      general: "GENERAL",
      prodName: "Imuzomen-Immunity-Boosting-Powder",
      amt: 410,
      qnt: 1
    },
    {
      prodId: 8,
      img: 'assets/med/8.jpg',
      general: "GENERAL",
      prodName: "Iusid-Premium-Supplement-For-Immunity&Wellbeing",
      amt: 4490,
      qnt: 1
    }
  ];

  prodInc(prod: { qnt: number; }){
    if(prod.qnt !=5 ){
      prod.qnt = prod.qnt + 1
    }
  }
  prodDec(prod: { qnt: number; }){
    if(prod.qnt !=1){
      prod.qnt = prod.qnt - 1
    }
    
  }

  itemsCart:any = [];
  addtocart(category: any){
      // this.cartService.addtoCart(category);
      console.log(category);
      let cartDataNull = localStorage.getItem('localCart');
      if(cartDataNull==null){
        let storeData:any = [];
        storeData.push(category);
        localStorage.setItem('localCart', JSON.stringify( storeData));
      } 
      else{
        var id = category.prodId;
        let index: number = -1;
        this.itemsCart = JSON.parse(localStorage.getItem('localCart')!);
        for(let i=0;i<this.itemsCart.length;i++){
            if(parseInt(id) === parseInt(this.itemsCart[i].prodId)){
              this.itemsCart[i].qnt = category.qnt;
              index = i;
              break;
            }
        }
        if(index==-1){
          this.itemsCart.push(category);
          localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
        }else{
          localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
        }
      } 
      this.cartNumberfunc();
  }

  cartNumber:number = 0;
  cartNumberfunc(){
    var cartValue = JSON.parse(localStorage.getItem('localCart')!);
    this.cartNumber =  cartValue.length;
    this.cartService.cartSubject.next(this.cartNumber);
  }
}
