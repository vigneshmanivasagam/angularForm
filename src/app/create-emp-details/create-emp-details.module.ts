import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEmpDetailsComponent } from './create-emp-details.component';
import { EmpRoutingModule } from './create-emp-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from './employee.service';


@NgModule({
  imports: [EmpRoutingModule, ReactiveFormsModule, CommonModule],
  declarations : [CreateEmpDetailsComponent],
  providers: [EmployeeService]
})
 export class CreateEmpDetailsModule {}
