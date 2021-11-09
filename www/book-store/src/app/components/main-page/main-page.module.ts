// import { MaxLengthPipe } from './../shared/pipes/max-length.pipe';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
// import { MaxLengthPipe } from '../shared/pipes/max-length.pipe';
// import {NgPipesModule} from 'ngx-pipes';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';


// import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
// import {NgPipesModule} from 'ngx-pipes';


const routes: Routes = [
  {path : '', component : HomeComponent}
]

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule, SharedModule, RouterModule.forChild(routes),MatIconModule,FormsModule
  ]
})
export class MainPageModule { }
