import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdvertisementCreateComponent } from './advertisement-create.component';
import { FormGroup } from '@angular/forms';

describe('AdvertisementCreateComponent', () => {
  let component: AdvertisementCreateComponent;
  let fixture: ComponentFixture<AdvertisementCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormGroup
      ],
      declarations: [ AdvertisementCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
