import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { SettingsComponent } from './settings/settings.component';
import {HttpClientModule } from '@angular/common/http';
import { InventoryService } from './service/inventory.service';






@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    FormsModule
  ],
  providers: [InventoryService],
  bootstrap: [AppComponent]
})

export class AppModule { }
