import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // images:string='Mobile';
  // price: number = 32434;
  // total: number = 32434;

  constructor() { }

  ngOnInit(): void {
    this.cartDetails();
    this.loadCart();
  }
  getCartDetailes:any=[];
  cartDetails(){
    if(localStorage.getItem('localCart')){
    this.getCartDetailes =JSON.parse(localStorage.getItem('localCart')!) ;
    console.log(this.getCartDetailes);
    }
  }
  incQnt(_id :any ,amount:any){
  for(let i=0; i<this.getCartDetailes.length;i++){
    if(this.getCartDetailes[i]._id===_id){
      this.getCartDetailes[i].amount =parseInt(amount)+1;

    }
  }
  localStorage.setItem('localCart',JSON.stringify(this.getCartDetailes));

  }
  decQnt(_id :any ,amount:any){
    for(let i=0; i<this.getCartDetailes.length;i++){
      if(this.getCartDetailes[i]._id===_id){
        this.getCartDetailes[i].amount =parseInt(amount)-1;

      }
    }
    localStorage.setItem('localCart',JSON.stringify(this.getCartDetailes));

    }
    total :number =0;
    loadCart(){
      if(localStorage.getItem('localCart')){
        this.getCartDetailes =JSON.parse(localStorage.getItem('localCart')!)
       this.total= this.getCartDetailes.reduce(function(acc:any,val:any){
        return acc+(val.price*val.amount);
        },0)


      }
    }
    removeAll(){
      localStorage.removeItem('localCart');
      this.getCartDetailes =[];
      this.total=0;
    }

// incQnt(title:any){

// }
  // getQuantity(title: any){
  //   this.total = title * this.price
  //   console.log(this.total)
  // }

}
