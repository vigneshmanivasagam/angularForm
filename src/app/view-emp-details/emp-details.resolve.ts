import { Injectable } from '@angular/core';

import { Resolve , Router } from '@angular/router';

import { Observable } from 'rxjs';
import { ViewEmployeeService } from './view-employee.service';

@Injectable()
export class ViewEmployeeResolver implements Resolve<any> {
  empDetails: any;
  constructor(private empService: ViewEmployeeService , private route: Router) {}

  resolve() {
    return  this.empService.getEmployeesList();
    // subscribe(res => {
    //   this.empDetails = res;
    //   if (this.empDetails.length > 0) {
    //       return this.empDetails;
    //   } else {
    //     this.route.navigate(['/create']);
    //     return null;
    //   }
    // });

  }
}
