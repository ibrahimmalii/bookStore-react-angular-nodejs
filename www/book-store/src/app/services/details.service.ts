import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private _apisevice: ApiService) {
  }
  getBookDetails(id:number,headers: any
  ) {
  return this._apisevice.get(`${environment.baseUrl}/api/books/${id}`,headers);
}
addBookComment(id:number, body:any,headers: any){
  return this._apisevice.post(`${environment.baseUrl}/api/comments/${id}`,body,headers);
}

deleteBookComment(id:any, headers: any){
  return this._apisevice.post(`${environment.baseUrl}/api/comments/delete/${id}`,'' , headers);
}

updateBookRate(id:number, body:any,headers:any){
return this._apisevice.put(`${environment.baseUrl}/api/books/update/${id}`,body,headers);
}

getAllCategoryBooks(id:number,headers:any){
return this._apisevice.get(`${environment.baseUrl}/api/categories/${id}`,headers);
}
}
