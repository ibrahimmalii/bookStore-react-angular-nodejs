import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  books: any;
  items: any;
  pageOfItems: Array<any>;
  isPageLoaded: boolean = false;
  bookUpdated:boolean = false;
  categories:any;

  form : FormGroup = new FormGroup({})
  ngOnInit() {


    this.http.get(`${environment.baseUrl}/api/books`).subscribe(response => {
      this.books = response;
      this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}` }));
      this.http.get(`${environment.baseUrl}/api/categories`).subscribe(response=>{
        this.categories = response
        console.log(response)
        this.isPageLoaded = true
      })
    })
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }

  updateBook(id:any, title:string, description:string, amount:any, price:any){
    console.log('ok')
    if(this.form.valid){
      this.http.put(`${environment.baseUrl}/api/books/update/admin/${id}`, {title, description, amount, price}).subscribe(response=>{
        console.log(response)
        location.reload()
      })
    }
  }

  deleteItem(id:any){
    if(confirm('Are you sure?')){
      this.http.delete(`${environment.baseUrl}/api/books/delete/${id}`).subscribe(response=>{
        console.log(response)
        location.reload()
      })
    }
  }

  addNew(rate:any, title:string, author:string, amount:any, price:any, description:string, avatar:any, category:any){
    this.http.post(`${environment.baseUrl}/api/books`, {rate, title, author, amount, price, description, avatar, category}).subscribe(response=>{
      console.log(response)
      location.reload()
    })
  }

}
