import { ApiService } from './../../../services/api.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title ="";
  // Title ="";
  rating = 0;
  starCount = 5;

  ratingArr: boolean[] = [];
  constructor(private apiService: ApiService ) {

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
 itemCart :any =[];
addCart(book :any){
console.log(book);
let carDataNull =localStorage.getItem('localCart');
if(carDataNull == null){
  let storeDataGet :any =[];
  storeDataGet.push(book);
  localStorage.setItem("localCart",JSON.stringify(storeDataGet));
}
else{
  var id = book._id;
  let index :number= -1;
  this.itemCart = (localStorage.getItem("localCart")) ;
  for(let i=0; i<this.itemCart.length;i++){
    if(parseInt(id) ===parseInt(this.itemCart[i]._id)){
     this.itemCart[i].amount =book.amount;
     index =i;
     break;
    }
  }
  if(index==-1){
    this.itemCart.push(book);
    localStorage.setItem("localCart",JSON.stringify(this.itemCart))
  }else{
    localStorage.setItem("localCart",JSON.stringify(this.itemCart))
  }
}
// localStorage.setItem("localCart",JSON.stringify(book))
}

}
