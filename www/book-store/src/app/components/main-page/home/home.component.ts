import { ApiService } from './../../../services/api.service';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Options } from '@angular-slider/ngx-slider';
import{ LabelType} from "@angular-slider/ngx-slider"



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title ="";
  // price ="";
  // @Output() search = new EventEmitter <any>();
  // Title ="";
  rating = 0;
  starCount = 5;

  ratingArr: boolean[] = [];
  constructor( private router: Router, private apiService: ApiService,private _cart: CartService) {

  }
  users: any;
 books: any;
  responseGet: Boolean = false

  ngOnInit(): void {
    // this.http.get('http://localhost:8080/api/users').subscribe(res=>{
    //   this.users = res
    //   this.responseGet = true
    //   console.log(res)
    // })

    const token = localStorage.token

    this.apiService.get('http://localhost:8080/api/books',
      { headers: { 'Authorization': `Bearer ${token}` } })
      .subscribe(res => {
        console.log(res)
        this.books = res;
        this.responseGet = true;
        this.ratingArr = Array(this.starCount).fill(false);

      })
  }
  Search() {
    console.log(this.title)
    if (this.title != "") {
      this.books = this.books.filter((res: { title: string; }) => {
        return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase())
      });
    }
    else if (this.title == "") {
      this.ngOnInit();
    }
 

  }
    getCatBooks(id:string){

    const token = localStorage.token
    this.apiService.get(`http://localhost:8080/api/categories/${id}`,
      { headers: { 'Authorization': `Bearer ${token}` } })
      .subscribe(res => {
        console.log(res)
        this.books = res;
        this.responseGet = true
      },
      (err => {
        console.log(err);
      }))
  }
   minValue: number = 100;
  maxValue: number = 400;
  options: Options = {
    floor: 0,
    ceil: 500,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#fcba03',
      to: '#fcba03',
    },
    getPointerColor: function(value) {
      if (value <= 500)
          return '#b91d23';
      if (value <= 6)
          return 'orange';
      if (value <= 9)
          return 'yellow';
      return '#2AE02A';
  },

    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "  <b>الاقل سعر:</b> " + value+"جنيه";
        case LabelType.High:
          return " <b>الاعلي سعر:</b> " + value +"جنيه";
        default:
          return "جنيه" + value;
      }
    }
  };

  returnStar(i: number) {
    if (this.rating >= i + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
//   stars(book: { rate: number; }){
// this.rating=book.rate;
//   }
getCarruntRate(num:number){

  return this.rating=num;
}

addToCart(book:any){
  this._cart.toCart(book);
}
goToDetails(id:any){
  this.router.navigateByUrl(`/categories/book-details/${id}`)
}
//  priceSearch() {
//     console.log(this.price)
//     if (this.price>= this.maxValue) {
//       this.books = this.books.filter((res: { price: number; }) => {
//         return res.price.toLocaleLowerCase().match(this.price.toLocaleLowerCase())
//       });
//     }
    
 
}
