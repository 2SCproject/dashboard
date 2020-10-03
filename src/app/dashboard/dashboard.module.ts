import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';
import {FormsModule} from '@angular/forms';
import {DashboardComponent} from './dashboard.component';
import { UsersComponent } from '../users/users.component';
import { OrdersComponent } from '../orders/orders.component';
import { AddcoursComponent } from '../addcours/addcours.component';





@NgModule({
  declarations: [
    DashboardComponent,
    UsersComponent,
    OrdersComponent,
    AddcoursComponent,
    

  ],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    RouterModule,
    FormsModule,

  ]
})
export class DashboardModule { }
