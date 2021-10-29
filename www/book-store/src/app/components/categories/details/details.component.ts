import { DetailsService } from './../../../services/details.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  card:any={};
  comments=[];
  constructor(private _DetailsService: DetailsService,private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const token = localStorage.token;

    let id = this._activatedRoute.snapshot.params.id;
    this._DetailsService.getBookDetails(id,{ headers: { 'Authorization': `Bearer ${token}` } }).subscribe(
      (response:any) => {
            this.card=response;
            this.comments=this.card.comments;
          },
          (error:any)=>{

          }

    );



  }

}
