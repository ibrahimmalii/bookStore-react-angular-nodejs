import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
// import {MatIconModule} from '@angular/material/icon';

// import { MaxLengthPipe } from './pipes/max-length.pipe';
// import {NgPipesModule} from 'ngx-pipes';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    BookDetailsComponent,
  ],
  imports: [
    CommonModule,NgxSliderModule,
    RouterModule
  ],
  exports :[
    HeaderComponent, FooterComponent, SidebarComponent, BookDetailsComponent
  ]
})
export class SharedModule { }
