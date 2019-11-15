import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { AboutComponent } from './components/about/about.component';
import { AboutSummaryComponent } from './components/about/about-summary/about-summary.component';
import { AboutUseCasesComponent } from './components/about/about-use-cases/about-use-cases.component';
import { AdvertisementComponent } from './components/advertisement/advertisement.component'

import { AdvertisementIndexComponent } from './components/advertisement/advertisement-index/advertisement-index.component';
import { AdvertisementCreateComponent } from './components/advertisement/advertisement-create/advertisement-create.component';
import { AdvertisementDetailComponent } from './components/advertisement-detail/advertisement-detail.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

const routes: Routes = [
  //Authentication
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  //Advertisement
  {path: 'advertisement', component: AdvertisementComponent,
     children: [ 
      {path: '', redirectTo: 'index', pathMatch: 'full'}, 
      {path: 'index', component: AdvertisementIndexComponent},
      {path: 'create', component: AdvertisementCreateComponent},
      {path: 'detail/:id', component: AdvertisementDetailComponent},
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
