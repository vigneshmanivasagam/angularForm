import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ViewEmployeeResolver } from './view-emp-details/emp-details.resolve';
import { ViewEmployeeService } from './view-emp-details/view-employee.service';
import { SharedFormService } from './shared/form-values-shared.service';
@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ViewEmployeeService, ViewEmployeeResolver,SharedFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
