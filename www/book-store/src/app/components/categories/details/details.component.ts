import { DetailsService } from './../../../services/details.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { takeUntil } from 'rxjs/operators';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  form: FormGroup= new FormGroup({});
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
  token = localStorage.token;
  id:number=0;
  headerObj={ headers: { 'Authorization': `Bearer ${this.token}` } };
  constructor(private snackBar: MatSnackBar,private _DetailsService: DetailsService,private _activatedRoute: ActivatedRoute,private _formBuilder:FormBuilder) {

  }

  ngOnInit(): void {
    this.form=this._formBuilder.group({
        commentContent: ['',[Validators.maxLength(256),Validators.minLength(5)]]
    })

     this.id = this._activatedRoute.snapshot.params.id;
    this._DetailsService.getBookDetails(this.id,this.headerObj).subscribe(
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
pushComment(comment:string){
  this.comments.push({description:comment});
this._DetailsService.addBookComment(this.id,{description:comment},this.headerObj).subscribe(
  (responsea:any)=>{
console.log(responsea);

},
(error:any)=>{

          }
          )
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

