import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewEmpDetailsComponent } from './view-emp-details.component';
import { ViewEmpRoutingModule } from './view-emp-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewEmployeeService } from './view-employee.service';
import { ViewEmployeeResolver } from './emp-details.resolve';

@NgModule({
  imports: [ViewEmpRoutingModule, ReactiveFormsModule, CommonModule],
  declarations : [ViewEmpDetailsComponent],
  providers: [ViewEmployeeService, ViewEmployeeResolver]
})
 export class ViewEmpDetailsModule {}
