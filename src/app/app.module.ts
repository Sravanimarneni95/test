import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { SignupComponent } from './signup/signup.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';




@NgModule({
  declarations: [
    AppComponent,
    MyaccountComponent,
    SignupComponent,
    MenComponent,
    WomenComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
