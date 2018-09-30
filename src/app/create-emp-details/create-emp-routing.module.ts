import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmpDetailsComponent } from './create-emp-details.component'

export const appRoutes: Routes = [
  {
    path: '',
    component: CreateEmpDetailsComponent
  },
];
 @NgModule({
  imports : [
    RouterModule.forChild(appRoutes)
  ],
  exports: [RouterModule]
 })
 export class EmpRoutingModule {}
