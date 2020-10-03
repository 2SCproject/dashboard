import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import { UsersComponent } from '../users/users.component';
import { OrdersComponent } from '../orders/orders.component';
import { AddcoursComponent } from '../addcours/addcours.component';
import { EditproductComponent } from '../editproduct/editproduct.component';








 const routes: Routes = [
                              {path: '', component: DashboardComponent},
                              {path: 'users', component: UsersComponent},
                              {path:'orders',component:OrdersComponent},
                              {path:'product/add',component:AddcoursComponent},
                              {path:'product/edit/:id',component:EditproductComponent}
                        ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }