import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BookDetailsComponent } from './book-details/book-details.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
<<<<<<< HEAD

=======
    BookDetailsComponent
>>>>>>> e39009320c6a0419ce8b7ff9aa9b73facd8592bf
  ],
  imports: [
    CommonModule
  ],
  exports :[
    HeaderComponent, FooterComponent, SidebarComponent, BookDetailsComponent
  ]
})
export class SharedModule { }
