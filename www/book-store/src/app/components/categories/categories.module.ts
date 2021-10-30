
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademicCoursesModule } from './academic-courses/academic-courses.module';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MatIconModule} from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const routes: Routes = [
  {
    path: 'acadimic',
    loadChildren: () => import('./academic-courses/academic-courses.module').then(m => m.AcademicCoursesModule)
  },{
    path: 'diplomas',
    loadChildren: () => import('./diplomas/diplomas.module').then(m => m.DiplomasModule)
  },{
    path: 'graduate',
    loadChildren: () => import('./graduate-studies/graduate-studies.module').then(m => m.GraduateStudiesModule)
  },
  {
    path:'book-details/:id',
   component : DetailsComponent
  },
  {path : '', component : AcademicCoursesModule}
];



@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,SharedModule, RouterModule.forChild(routes),MatInputModule,MatFormFieldModule,AccordionModule,MatIconModule,MatSnackBarModule
  ]
})
export class CategoriesModule { }
