import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent } from './components/about/about.component';
import { AboutSummaryComponent } from './components/about/about-summary/about-summary.component'
import { AboutUseCasesComponent } from './components/about/about-use-cases/about-use-cases.component'
import {NotFoundComponent} from './components/not-found/not-found.component';
import {LoginComponent} from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdvertisementIndexComponent } from './components/advertisement-index/advertisement-index.component';
import { AdvertisementCreateComponent } from './components/advertisement-create/advertisement-create.component';
import { AdvertisementDetailComponent } from './components/advertisement-detail/advertisement-detail.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'advertisement-index', component: AdvertisementIndexComponent},
  {path: 'advertisement-create', component: AdvertisementCreateComponent},
  {path: 'advertisement-detail/:id', component: AdvertisementDetailComponent},
  {path: 'about', component: AboutComponent,
    //Child routes for advertisements-detail/:id
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
