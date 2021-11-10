import { Router } from '@angular/router';
import { DetailsService } from './../../../../services/details.service';
import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-special-education',
  templateUrl: './special-education.component.html',
  styleUrls: ['./special-education.component.css']
})
export class SpecialEducationComponent implements OnInit {
constructor( private router: Router, private apiService: ApiService,private _cart: CartService,private _DetailsService: DetailsService) {

  }
  rating = 0;
  starCount = 5;

  ratingArr: boolean[] = [];
  token = localStorage.token;
  users: any;
   books: any;
  responseGet: Boolean = false
  id:any="617217fce9ef8ab21a899d8e";
  headerObj={ headers: { 'Authorization': `Bearer ${this.token}` } };

  ngOnInit(): void {
            this._DetailsService.getAllCategoryBooks(  this.id,this.headerObj).subscribe(
            (response:any) => {
              this.books=response;
              this.responseGet=true;
              this.ratingArr = Array(this.starCount).fill(false);

          },
         (error:any)=>{

          }

    )
  }
 returnStar(i: number) {
    if (this.rating >= i + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
getCarruntRate(num:number){

  return this.rating=num;
}

addToCart(book:any){
  this._cart.toCart(book);
}
goToDetails(id:any){
  this.router.navigateByUrl(`/categories/book-details/${id}`)
}
}
