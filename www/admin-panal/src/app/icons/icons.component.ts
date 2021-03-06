import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  form : FormGroup = new FormGroup({})
  ngOnInit() {

    this.http.get('http://localhost:8080/api/books').subscribe(response => {
      this.books = response;
      this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}` }));
      this.isPageLoaded = true
    })
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }

  updateBook(id:any, title:string, description:string, amount:any, price:any){
    console.log('ok')
    if(this.form.valid){
      this.http.put(`http://localhost:8080/api/books/update/admin/${id}`, {title, description, amount, price}).subscribe(response=>{
        console.log(response)
        location.reload()
      })
    }
  }

}
