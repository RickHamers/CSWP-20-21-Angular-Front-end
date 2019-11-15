import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUseCasesComponent } from './about-use-cases.component';

describe('AboutUseCasesComponent', () => {
  let component: AboutUseCasesComponent;
  let fixture: ComponentFixture<AboutUseCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUseCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUseCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
