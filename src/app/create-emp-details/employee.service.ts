import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';
@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) { }

  addEmployee(formDetails) {
    const uri = 'http://localhost:4000/employee/add';
    const obj = {
      firstName: formDetails.value.firstName,
      lastName: formDetails.value.lastName
    };
    this.http.post(uri, obj)
        .subscribe(res => console.log('Done'));
  }
}
