import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistedSignUpComponent } from './assisted-sign-up.component';

describe('AssistedSignUpComponent', () => {
  let component: AssistedSignUpComponent;
  let fixture: ComponentFixture<AssistedSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssistedSignUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistedSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
