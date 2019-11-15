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
import { RegisterComponent } from './components/register/register.component';
import { AdvertisementIndexComponent } from './components/advertisement/advertisement-index/advertisement-index.component';
import { AdvertisementCreateComponent } from './components/advertisement/advertisement-create/advertisement-create.component';
import { AdvertisementDetailComponent } from './components/advertisement-detail/advertisement-detail.component';
import { AboutSummaryComponent } from './components/about/about-summary/about-summary.component';
import { AboutUseCasesComponent } from './components/about/about-use-cases/about-use-cases.component';
import { AdvertisementComponent } from './components/advertisement/advertisement.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NotFoundComponent,
    LoginComponent,
    NavigationMenuComponent,
    RegisterComponent,
    AdvertisementIndexComponent,
    AdvertisementCreateComponent,
    AdvertisementDetailComponent,
    AboutSummaryComponent,
    AboutUseCasesComponent,
    AdvertisementComponent
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
