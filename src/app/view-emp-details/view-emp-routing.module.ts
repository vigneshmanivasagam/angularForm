import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewEmpDetailsComponent } from './view-emp-details.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: ViewEmpDetailsComponent
  },
];
 @NgModule({
  imports : [
    RouterModule.forChild(appRoutes)
  ],
  exports: [RouterModule]
 })
 export class ViewEmpRoutingModule {}
