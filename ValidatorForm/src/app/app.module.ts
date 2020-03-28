import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Router, RouterModule, Routes} from "@angular/router";
import { HttpClientModule} from "@angular/common/http";
import { RegisterComponent } from './register/register.component';
import {FormsModule} from "@angular/forms";


const appRoutes : Routes = [

  {path : 'register',
    component : RegisterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
