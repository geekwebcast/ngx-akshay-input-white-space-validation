import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAkshayInputWhiteSpaceValidationComponent } from './ngx-akshay-input-white-space-validation.component';

describe('NgxAkshayInputWhiteSpaceValidationComponent', () => {
  let component: NgxAkshayInputWhiteSpaceValidationComponent;
  let fixture: ComponentFixture<NgxAkshayInputWhiteSpaceValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxAkshayInputWhiteSpaceValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAkshayInputWhiteSpaceValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
