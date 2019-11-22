import { ChangePasswordComponent } from './components/account/change-password/change-password.component';
import { ProfileComponent } from './components/account/profile/profile.component';
import { AccountComponent } from './components/account/account.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';

import { AboutComponent } from './components/about/about.component';
import { AboutSummaryComponent } from './components/about/about-summary/about-summary.component';
import { AboutUseCasesComponent } from './components/about/about-use-cases/about-use-cases.component';
import { AdvertisementComponent } from './components/advertisement/advertisement.component'

import { AdvertisementIndexComponent } from './components/advertisement/advertisement-index/advertisement-index.component';
import { AdvertisementCreateComponent } from './components/advertisement/advertisement-create/advertisement-create.component';
import { AdvertisementDetailComponent } from './components/advertisement/advertisement-detail/advertisement-detail.component';
import { AdvertisementEditComponent } from './components/advertisement/advertisement-edit/advertisement-edit.component';

import { AuthenticationGuardService } from './services/authentication-guard.service'

import {NotFoundComponent} from './components/not-found/not-found.component';


const routes: Routes = [
  //Authentication
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  //Account
  {path: 'account', component: AccountComponent,
  children: [
    {path: '', redirectTo: 'account', pathMatch: 'full'},
    {path: 'profile', component: ProfileComponent},
    {path: 'change-password', component: ChangePasswordComponent}
  ]},

  //Advertisement
  {path: 'advertisement', component: AdvertisementComponent, canActivate: [AuthenticationGuardService],
     children: [ 
      {path: '', redirectTo: 'index', pathMatch: 'full'}, 
      {path: 'index', component: AdvertisementIndexComponent, canActivate: [AuthenticationGuardService]},
      {path: 'create', component: AdvertisementCreateComponent, canActivate: [AuthenticationGuardService]},
      {path: 'detail/:id/edit', component: AdvertisementEditComponent, canActivate: [AuthenticationGuardService]},
      {path: 'detail/:id', component: AdvertisementDetailComponent, canActivate: [AuthenticationGuardService]},
    
    ]
  },
  
  //About
  {path: 'about', component: AboutComponent,
    children: [ 
      {path: '', redirectTo: 'summary', pathMatch: 'full'}, 
      {path: 'summary', component: AboutSummaryComponent}, 
      {path: 'use-cases', component: AboutUseCasesComponent}, 
    ]
  },

  //Page to redirect to on initial load or on empty path
  {path: '', redirectTo: 'login', pathMatch: 'full'},

  // Catch all non-existing paths and show a 404 component
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: 'not-found', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
