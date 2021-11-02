import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports :[
    HeaderComponent, FooterComponent, SidebarComponent, BookDetailsComponent
  ]
})
export class SharedModule { }
