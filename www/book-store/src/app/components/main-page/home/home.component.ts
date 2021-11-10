import { ApiService } from './../../../services/api.service';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // @Input()title ="";
  // @Output() search = new EventEmitter <any>();
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
  // Search() {
  //   console.log(this.title)
  //   if (this.title != "") {
  //     this.books = this.books.filter((res: { title: string; }) => {
  //       return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase())
  //     });
  //   }
  //   else if (this.title == "") {
  //     this.ngOnInit();
  //   }
  //   this.search.emit(title);
  // }
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

}
