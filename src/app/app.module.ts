import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NotFoundComponent,
    LoginComponent,
    NavigationMenuComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }