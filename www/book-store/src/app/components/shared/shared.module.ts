import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { RouterModule } from '@angular/router';
<<<<<<< HEAD
=======
import { NgxSliderModule } from '@angular-slider/ngx-slider';
>>>>>>> 78c2f7e6eba5164c48d64a12d73eed015804be87



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
<<<<<<< HEAD
    RouterModule
=======
    RouterModule,
    NgxSliderModule
>>>>>>> 78c2f7e6eba5164c48d64a12d73eed015804be87
  ],
  exports :[
    HeaderComponent, FooterComponent, SidebarComponent, BookDetailsComponent
  ]
})
export class SharedModule { }
