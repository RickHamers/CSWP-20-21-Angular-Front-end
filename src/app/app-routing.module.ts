import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {NotFoundComponent} from './not-found/not-found.component';


const routes: Routes = [
  {path: 'about', component: AboutComponent},
  // Catch all non-existing paths
  {path: 'about', component: NotFoundComponent},
  {path: '**', redirectTo: '/not-found', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
