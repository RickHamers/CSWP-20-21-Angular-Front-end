import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AdvertisementIndexComponent } from './advertisement-index.component';
import {RouterTestingModule} from "@angular/router/testing";



describe('AdvertisementIndexComponent', () => {
  let component: AdvertisementIndexComponent;
  let fixture: ComponentFixture<AdvertisementIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],

      declarations: [ AdvertisementIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
