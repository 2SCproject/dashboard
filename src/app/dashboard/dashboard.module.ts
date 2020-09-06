import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';
import {FormsModule} from '@angular/forms';
import {DashboardComponent} from './dashboard.component';




@NgModule({
  declarations: [
    DashboardComponent,
    

  ],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    RouterModule,
    FormsModule,

  ]
})
export class DashboardModule { }
