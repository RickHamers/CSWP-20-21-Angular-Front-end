import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {LoginComponent} from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdvertisementIndexComponent } from './components/advertisement-index/advertisement-index.component';
import { AdvertisementCreateComponent } from './components/advertisement-create/advertisement-create.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'advertisement-index', component: AdvertisementIndexComponent},
  {path: 'advertisement-create', component: AdvertisementCreateComponent},
  {path: 'about', component: AboutComponent},
  //Page to redirect to on initial load
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  // Catch all non-existing paths
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: 'not-found', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
