import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// for routing
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import HttpClientModule
import { HttpClientModule } from '@angular/common/http';

//import pagination
import {NgxPaginationModule} from 'ngx-pagination';





@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  // activate HttpClientModule
    NgxPaginationModule // activated here
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
