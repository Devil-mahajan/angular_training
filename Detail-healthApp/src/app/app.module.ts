import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "./component/dashboard/dashboard.component";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    DashboardComponent,
    
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
