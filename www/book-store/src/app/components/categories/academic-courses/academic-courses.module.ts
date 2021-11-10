import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EngineeringComponent } from './engineering/engineering.component';
import { IslamicLawComponent } from './islamic-law/islamic-law.component';
import { HomeEconomicsComponent } from './home-economics/home-economics.component';
import { MedicineComponent } from './medicine/medicine.component';
import { RightsComponent } from './rights/rights.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';     //accordion and accordion tab
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
const routes: Routes = [
  {path : 'engineering', component : EngineeringComponent},
  {path : 'home-economics', component : HomeEconomicsComponent},
  {path : 'islamic-law', component : IslamicLawComponent},
  {path : 'medicine', component : MedicineComponent},
  {path : 'rights', component : RightsComponent},
  {path : '', component : EngineeringComponent}
];

@NgModule({
  declarations: [
    EngineeringComponent,
    IslamicLawComponent,
    HomeEconomicsComponent,
    MedicineComponent,
    RightsComponent
  ],
  imports: [
    CommonModule, SharedModule, RouterModule.forChild(routes),MatIconModule,MatInputModule
  ]
})
export class AcademicCoursesModule { }
