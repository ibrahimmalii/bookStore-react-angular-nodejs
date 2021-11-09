import { Component, Input, OnInit } from '@angular/core';
// import { LabelType, Options } from 'ng5-slider/options';
// import { LabelType, Options } from 'ng5-slider';
import { Options } from '@angular-slider/ngx-slider';
import{ LabelType} from "@angular-slider/ngx-slider"

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  // title ="";
  // @Input title:string ="";
  // @Input() Title = '';
  // rating = 0;
  // starCount = 5;

  // ratingArr: boolean[] = [];


  constructor() { }

  ngOnInit(): void {

  }
  // returnStar(i: number) {
  //   if (this.rating >= i + 1) {
  //     return 'star';
  //   } else {
  //     return 'star_border';
  //   }
  // }
  minValue: number = 100;
  maxValue: number = 400;
  options: Options = {
    floor: 0,
    ceil: 500,
    showSelectionBar: true,
    selectionBarGradient: {
      from: '#fcba03',
      to: '#fcba03',
    },
    getPointerColor: function(value) {
      if (value <= 500)
          return '#b91d23';
      if (value <= 6)
          return 'orange';
      if (value <= 9)
          return 'yellow';
      return '#2AE02A';
  },

    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "  <b>الاقل سعر:</b> " + value+"جنيه";
        case LabelType.High:
          return " <b>الاعلي سعر:</b> " + value +"جنيه";
        default:
          return "جنيه" + value;
      }
    }
  };



}

