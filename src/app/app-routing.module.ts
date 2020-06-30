import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { SignupComponent } from './signup/signup.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';


const routes: Routes = [
  { path: 'myaccount', component: MyaccountComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'Men', component: MenComponent },
  { path: 'Women', component: WomenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
