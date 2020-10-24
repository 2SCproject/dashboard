import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import { UsersComponent } from '../users/users.component';
import { OrdersComponent } from '../orders/orders.component';
import { AddproductComponent } from '../addproduct/addproduct.component';
import { EditproductComponent } from '../editproduct/editproduct.component';
import { SettingsComponent } from '../settings/settings.component';
import { CategoryComponent } from '../category/category.component';
import { UsersearchComponent } from '../usersearch/usersearch.component';
import { OrdersearchComponent } from '../ordersearch/ordersearch.component';








 const routes: Routes = [
                             
                              { path: '', component: DashboardComponent, children: [

                              {path: 'users', component: UsersComponent},
                              {path:'orders',component:OrdersComponent},
                              {path:'product/add',component:AddproductComponent},
                              {path:'product/edit/:id',component:EditproductComponent},
                              {path:'settings',component:SettingsComponent},
                              {path:'categories',component:CategoryComponent},
                              {path:'user/search',component:UsersComponent },
                              {path:'order/search',component:OrdersComponent},
                        ],
                      }
                      ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }