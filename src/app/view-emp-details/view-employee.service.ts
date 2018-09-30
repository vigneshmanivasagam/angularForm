import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';
@Injectable()
export class ViewEmployeeService {

  constructor(private http: HttpClient) { }


  getEmployeesList() {
    const uri = 'http://localhost:4000/employee';
    return this
            .http
            .get(uri)
            .pipe(map(res => {
              return res;
            }));
  }

  deleteEmployee(id) {
    const uri = 'http://localhost:4000/employee/delete/' + id;
    return this
            .http
            .get(uri)
            .pipe(map(res => {
              return res;
            }));
  }
}
