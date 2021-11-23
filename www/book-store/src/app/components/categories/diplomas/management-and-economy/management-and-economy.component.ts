import { DetailsService } from './../../../../services/details.service';
import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-management-and-economy',
  templateUrl: './management-and-economy.component.html',
  styleUrls: ['./management-and-economy.component.css']
})
export class ManagementAndEconomyComponent implements OnInit {

constructor(private router: Router, private apiService: ApiService,private _cart: CartService,private _DetailsService: DetailsService) {

  }
  rating = 0;
  starCount = 5;

  ratingArr: boolean[] = [];
  token = localStorage.token;
  users: any;
   books: any;
  responseGet: Boolean = false
  id:any="617217eae9ef8ab21a899d8c";
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

isAdded(bookId: number){
    if(localStorage.localCart){
    let itemCart = JSON.parse(localStorage.getItem("localCart")!);
    for(let i = 0; i < itemCart.length; i++)
      if(itemCart[i]._id === bookId)
        return true;
     return false;
    }
    else{
      return false

    }
  }

addToCart(book:any){
  this._cart.toCart(book);
}
goToDetails(id:any){
  this.router.navigateByUrl(`/categories/book-details/${id}`)
}
}
