import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialEducationComponent } from './special-education/special-education.component';
import { ArtsAndHumanitiesComponent } from './arts-and-humanities/arts-and-humanities.component';
import { EconomicsAndManagementComponent } from './economics-and-management/economics-and-management.component';
import { SciencesComponent } from './sciences/sciences.component';
import { RouterModule, Routes } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

const routes: Routes = [
  {path : 'arts-humanities', component : ArtsAndHumanitiesComponent},
  {path : 'economics-management', component : EconomicsAndManagementComponent},
  {path : 'special-education', component : SpecialEducationComponent},
  {path : '', component : ArtsAndHumanitiesComponent}
];


@NgModule({
  declarations: [
    SpecialEducationComponent,
    ArtsAndHumanitiesComponent,
    EconomicsAndManagementComponent,
    SciencesComponent
  ],
  imports: [
    CommonModule, SharedModule, RouterModule.forChild(routes),MatIconModule,
  ]
})
export class GraduateStudiesModule { }
