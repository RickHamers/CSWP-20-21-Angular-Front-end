import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {AboutComponent} from './components/about/about.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {LoginComponent} from './components/auth/login/login.component';
import {NavigationMenuComponent} from './components/navigation-menu/navigation-menu.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        NgbModule
      ],
      declarations: [
        AppComponent,
        AboutComponent,
        NotFoundComponent,
        LoginComponent,
        NavigationMenuComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'cswp-angular-nr2128706-yr1920'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('cswp-angular-nr2128706-yr1920');
  });
});
