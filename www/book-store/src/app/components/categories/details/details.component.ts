import { DetailsService } from './../../../services/details.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { takeUntil } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  books: any[] = [];
  form: FormGroup = new FormGroup({});
  card: any = {};

  comments: any[] = [];
  rating = 0;
  starCount = 5;
  ratingArr: boolean[] = [];
  snackBarDuration = 1000;
  response = [
    'لقد كسرت قلبي !',
    'حقاً؟',
    'سوف نقوم بعمل الأفضل اعدك .',
    'أنا سعيد أنه نال إعجابك',
    'شكراً لك علي تقيمك'
  ]
  token = localStorage.token;
  id: number = 0;
  headerObj = { headers: { 'Authorization': `Bearer ${this.token}` } };
  constructor(private snackBar: MatSnackBar, private _DetailsService: DetailsService, private _activatedRoute: ActivatedRoute, private _formBuilder: FormBuilder, private userService: UserService, private router: Router, private location: Location) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });

    if (!this.userService.isLogged()) {
      this.router.navigateByUrl('/auth/login')
    }


    this.form = this._formBuilder.group({
      commentContent: ['', [Validators.maxLength(256), Validators.minLength(5)]]
    })

    this.id = this._activatedRoute.snapshot.params.id;
    this._DetailsService.getBookDetails(this.id, this.headerObj).subscribe(
      (response: any) => {
        console.log(response);
        this.card = response.data;
        if (this.card) {
          this._DetailsService.getAllCategoryBooks(this.card.category, this.headerObj).subscribe(
            (response: any) => {
              this.books = response;
              this.books = this.books.splice(this.books.length - 3, this.books.length);

            },
            (error: any) => {

            }

          )

        }
        this.rating = response.data.rate;
        this.ratingArr = Array(this.starCount).fill(false);

        this.comments = response.comments;
        console.log(this.comments)
        this.comments = this.comments.splice(this.comments.length - 5, this.comments.length);
      },
      (error: any) => {

      }

    );

  }
  openDetails(id: number) {
    this.router.navigateByUrl(`/categories/book-details/${id}`)
    this.id = id;
    this._DetailsService.getBookDetails(this.id, this.headerObj).subscribe(
      (response: any) => {
        console.log(response);
        this.card = response.data;
        if (this.card) {
          this._DetailsService.getAllCategoryBooks(this.card.category, this.headerObj).subscribe(
            (response: any) => {
              this.books = response;
              this.books = this.books.splice(this.books.length - 3, this.books.length);

            },
            (error: any) => {

            }

          )

        }
        this.rating = response.data.rate;
        this.ratingArr = Array(this.starCount).fill(false);

        this.comments = response.comments;
        this.comments = this.comments.splice(this.comments.length - 5, this.comments.length);
      },
      (error: any) => {

      }

    );
  }
  pushComment(comment: string) {
    this.comments.push({ description: comment });
    this.comments = this.comments.splice(this.comments.length - 5, this.comments.length);

    this._DetailsService.addBookComment(this.id, { description: comment }, this.headerObj).subscribe(
      (responsea: any) => {
        console.log(responsea);

      },
      (error: any) => {

      }
    )
  }

  deleteBookComment(id: any, index: any){
     this._DetailsService.deleteBookComment(id, this.headerObj).subscribe(
      (responsea: any) => {
        console.log(responsea);
        this.comments.splice(index, 1);
      },
      (error: any) => {
        console.log(error);
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
    this.card.rate = this.rating;
    this.snackBar.open(this.response[i], '', {
      duration: this.snackBarDuration,
      panelClass: ['snack-bar']
    });

  }
  goToCart() {
    let storedBooks = [];
    let found = false;
    if (localStorage.toCart) {

      storedBooks = JSON.parse(localStorage.toCart);
      for (let item in storedBooks) {
        if (storedBooks[item]._id ==
          this.card._id)
          found = true;
      }
      if (!found) {
        storedBooks.push(this.card);
      }

    }
    else if (!localStorage.toCart) {
      storedBooks.push(this.card);
    }

    localStorage.setItem("toCart", JSON.stringify(storedBooks));
    this.router.navigate(['/sells']);

  }

  makeRate(i: number) {
    let storedRate = [];
    let found = false;
    if (localStorage.rated) {

      storedRate = JSON.parse(localStorage.rated);
      for (let item in storedRate) {
        if (storedRate[item].id ==
          this.card._id)
          found = true;
      }
      if (!found) {
        storedRate.push({ id: this.card._id });
        this.onClick(i);
        console.log(this.card.rate);
        this._DetailsService.updateBookRate(this.card._id, { rate: this.card.rate }, this.headerObj).subscribe(
          (responsea: any) => {
            console.log(responsea);
          },
          (error: any) => {
            console.error(error);
          }
        )
      }

    }
    else if (!localStorage.rated) {
      storedRate.push({ id: this.card._id });
      this.onClick(i);
      console.log("first time");
      this._DetailsService.updateBookRate(this.card._id, { rate: this.card.rate }, this.headerObj).subscribe(
        (responsea: any) => {
          console.log(responsea);
        },
        (error: any) => {
          console.error(error);
        }
      )
    }

    localStorage.setItem("rated", JSON.stringify(storedRate));
  }
}

