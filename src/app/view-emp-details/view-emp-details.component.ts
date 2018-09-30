import { Component, OnInit } from '@angular/core';
import { ViewEmployeeService } from './view-employee.service';
import { ActivatedRoute } from '@angular/router';
import { SharedFormService } from '../shared/form-values-shared.service'
@Component({
  selector: 'app-view-emp-details',
  templateUrl: './view-emp-details.component.html',
  styleUrls: ['./view-emp-details.component.css']
})
export class ViewEmpDetailsComponent implements OnInit {
  empDetails: any;
  storeEmpDetails: any;
  employeeInfoToEdit:any;
  constructor(private viewEmpService: ViewEmployeeService, private route: ActivatedRoute , private sharedService : SharedFormService) { 
  }

  ngOnInit() {
    // this.getEmployess();
   // this.storeEmpDetails = this.route.snapshot.data['empDetails'];
   this.route.data.subscribe(res => {
     this.storeEmpDetails = res['empDetails'];
     this.showEmployees(this.storeEmpDetails);
     console.log(this.empDetails);
   })
    
  }

showEmployees(empDetails){
 this.empDetails=empDetails;
}

deleteEmployee(id,index) {
  this.viewEmpService.deleteEmployee(id).subscribe(res => {
    console.log('deleted'+index);
    this.storeEmpDetails.splice(index,1);
    this.showEmployees(this.storeEmpDetails);
    console.log( this.storeEmpDetails);
  });
}

editEmployee(index) {
  this.employeeInfoToEdit = this.storeEmpDetails[index];
  this.sharedService.setFormValues(this.employeeInfoToEdit);
}

}
