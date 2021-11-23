import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private apiService: ApiService, private userService: UserService, private router: Router) {
    this.userService.cartSubject.subscribe((data)=>{
    this.cartItem =data;
    });
   }


  books: any;
  responseGet: Boolean = false
  ngOnInit(): void {
    this.cartItemFun();
  }
  cartItem:number=0;
  cartItemFun(){
    if(localStorage.getItem("localCart")!=null){
      var cartCount = JSON.parse(localStorage.getItem('localCart')!);
     this.cartItem =cartCount.length;
    }
  }

  getCatBooks(id:string){

    const token = localStorage.token
    this.apiService.get(`${environment.baseUrl}/api/categories/${id}`,
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

  getUserName():string{
    const user = JSON.parse(localStorage.user);
    return user.name
  }

  logout(){
    this.userService.logout();
  }

  logStatus(): boolean{
    return this.userService.isLogged();
  }

  goToCart(){
    if(this.userService.isLogged())
      this.router.navigateByUrl('/sells/cart');
    else
      this.router.navigateByUrl('/auth/login');
  }
}
