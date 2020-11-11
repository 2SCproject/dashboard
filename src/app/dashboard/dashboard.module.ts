import { AddproductComponent } from './../addproduct/addproduct.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DashboardComponent} from './dashboard.component';
import { UsersComponent } from '../users/users.component';
import { OrdersComponent } from '../orders/orders.component';
import { EditproductComponent } from '../editproduct/editproduct.component';
import { CategoryComponent } from '../category/category.component';

import { OrdersearchComponent } from '../ordersearch/ordersearch.component';





@NgModule({
  declarations: [
    DashboardComponent,
    UsersComponent,
    OrdersComponent,
    EditproductComponent,
    CategoryComponent,
    UsersComponent,
    OrdersComponent,
    AddproductComponent

  ],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class DashboardModule { }
