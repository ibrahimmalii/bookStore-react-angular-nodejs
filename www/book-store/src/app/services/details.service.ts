import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private _apisevice: ApiService) {
  }
  getBookDetails(id:number,headers: any
  ) {
  return this._apisevice.get(`http://localhost:8080/api/books/${id}`,headers);
}
addBookComment(id:number, headers:any, body: any){
  return this._apisevice.post(`http://localhost:8080/api/commnets/${id}`,body,headers);
}
}
