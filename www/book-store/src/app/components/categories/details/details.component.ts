import { DetailsService } from './../../../services/details.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  card:any={};
  comments:any[]=[];
   rating = 0;
  starCount = 5;
  ratingArr: boolean[] = [];
  snackBarDuration = 1000;
  response = [
    'You broke my heart!',
    'Really?',
    'We will do better next time.',
    'Glad you like it!',
    'Thank you so much!'
  ]

  constructor(private snackBar: MatSnackBar,private _DetailsService: DetailsService,private _activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    const token = localStorage.token;

    let id = this._activatedRoute.snapshot.params.id;
    this._DetailsService.getBookDetails(id,{ headers: { 'Authorization': `Bearer ${token}` } }).subscribe(
      (response:any) => {
        console.log(response);
        this.card=response.data;
        this.rating=response.data.rate;
        this.ratingArr = Array(this.starCount).fill(false);

            this.comments=response.comments;
          },
          (error:any)=>{

          }

    );


}
 returnStar(i: number) {
    if (this.rating >= i + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
    onClick(i: number) {
    this.rating = i + 1;
    this.snackBar.open(this.response[i], '', {
      duration: this.snackBarDuration,
      panelClass: ['snack-bar']
    });

  }
}

