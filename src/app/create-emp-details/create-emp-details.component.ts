import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { EmployeeService } from './employee.service';
import { SharedFormService } from '../shared/form-values-shared.service'

@Component({
  selector: 'app-create-emp-details',
  templateUrl: './create-emp-details.component.html',
  styleUrls: ['./create-emp-details.component.css']
})
export class CreateEmpDetailsComponent implements OnInit {
  employeeForm: FormGroup;
  empDetails: any;
  employeeInfo :any;
  constructor(private employeeService: EmployeeService, private fb: FormBuilder, private sharedFormValues : SharedFormService) {

    this.createForm();
   }
   createForm() {
     this.employeeInfo= this.sharedFormValues.getFormValues();
     
     this.employeeForm = this.fb.group({
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ],
      email: ['', Validators.required],
      selectionStatus: []
     });
   }

   addEmployee(formDetails) {
     console.log(formDetails);
     this.employeeService.addEmployee(formDetails);
   }

  ngOnInit() {
    // this.getCoins();
    if( this.employeeInfo) {
       this.employeeForm.patchValue({
      firstName: this.employeeInfo.firstName,
      lastName : this.employeeInfo.lastName
    });
     }
  }



}

