import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewEmployeeResolver } from './view-emp-details/emp-details.resolve';

export const appRoutes: Routes = [
  {
   path : '',
   redirectTo: 'view',
   pathMatch: 'full',
  },
  {
    path: 'create',
    loadChildren: './create-emp-details/create-emp-details.module#CreateEmpDetailsModule'
  },
  {
    path: 'view',
    loadChildren: './view-emp-details/view-emp-details.module#ViewEmpDetailsModule',
    resolve: {empDetails: ViewEmployeeResolver}
  },
];
 @NgModule({
  imports : [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
 // providers: [ViewEmployeeResolver]
 })
 export class AppRoutingModule {}
