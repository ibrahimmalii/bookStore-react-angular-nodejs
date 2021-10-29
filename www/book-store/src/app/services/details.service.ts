import { ApiService } from 'src/app/services/api.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private _apisevice: ApiService) { }

  getBookDetails(id:number,headers: any
    ) {
    return this._apisevice.get(`http://localhost:8080/api/books/${id}`,headers);
  }
}
