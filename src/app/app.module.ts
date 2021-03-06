import { FileUploadModule } from 'ng2-file-upload';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/auth/login/login.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AdvertisementIndexComponent } from './components/advertisement/advertisement-index/advertisement-index.component';
import { AdvertisementCreateComponent } from './components/advertisement/advertisement-create/advertisement-create.component';
import { AdvertisementDetailComponent } from './components/advertisement/advertisement-detail/advertisement-detail.component';
import { AboutSummaryComponent } from './components/about/about-summary/about-summary.component';
import { AboutUseCasesComponent } from './components/about/about-use-cases/about-use-cases.component';
import { AdvertisementComponent } from './components/advertisement/advertisement.component';
import { AdvertisementEditComponent } from './components/advertisement/advertisement-edit/advertisement-edit.component';
import { AccountComponent } from './components/account/account.component';
import { ProfileComponent } from './components/account/profile/profile.component';
import { ChangePasswordComponent } from './components/account/change-password/change-password.component';

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
    AdvertisementComponent,
    AdvertisementEditComponent,
    AccountComponent,
    ProfileComponent,
    ChangePasswordComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
