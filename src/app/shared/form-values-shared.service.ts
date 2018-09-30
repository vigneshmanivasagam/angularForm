import { Injectable } from '@angular/core';

@Injectable()

export class SharedFormService {
  formValues:any;
  constructor() { }

  setFormValues(empDetails) {
      this.formValues = empDetails;
  }

  getFormValues() {
      return this.formValues;
  } 
}
