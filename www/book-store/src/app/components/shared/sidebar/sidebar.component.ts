import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import { LabelType, Options } from 'ng5-slider/options';
// import { LabelType, Options } from 'ng5-slider';
import { Options } from '@angular-slider/ngx-slider';
import{ LabelType} from "@angular-slider/ngx-slider"
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  // title ="";
  // @Input title:string ="";
  // @Input() Title = '';
  @Output() searchText=new EventEmitter<string>();
  @Output() maxPrice=new EventEmitter<number>();
  @Output() minPrice= new EventEmitter<number>();
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

    this.apiService.get(`${environment.baseUrl}/api/books`,
      { headers: { 'Authorization': `Bearer ${token}` } })
      .subscribe(res => {
        console.log(res)
        this.books = res;
        this.responseGet = true;
      })
  }

  searchByMinPrice(){
    this.minPrice.emit(this.minValue);
  }
  searchByMaxPrice(){
    this.maxPrice.emit(this.maxValue);
  }
  search(text:string){
    this.searchText.emit(text);
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

  minValue: number = 100;
  maxValue: number = 400;
  options: Options = {
    floor: 0,
    ceil: 500,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#fcba03',
      to: '#fcba03',
    }
    // translate: (value: number, label: LabelType): string => {
    //   switch (label) {
    //     case LabelType.Low:
    //       return "  <b>الاقل سعر:</b> " + value+"جنيه";
    //     case LabelType.High:
    //       return " <b>الاعلي سعر:</b> " + value +"جنيه";
    //     default:
    //       return "جنيه" + value;
    //   }
    // }
  };


}