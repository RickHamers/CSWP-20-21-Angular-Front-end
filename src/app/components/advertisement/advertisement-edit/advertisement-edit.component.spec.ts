import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdvertisementEditComponent } from './advertisement-edit.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";

describe('AdvertisementEditComponent', () => {
  let component: AdvertisementEditComponent;
  let fixture: ComponentFixture<AdvertisementEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [ AdvertisementEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
