import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  books: any;
  responseGet: Boolean = false
  ngOnInit(): void {
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
}
