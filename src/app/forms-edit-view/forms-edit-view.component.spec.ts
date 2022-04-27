import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsEditViewComponent } from './forms-edit-view.component';

describe('FormsEditViewComponent', () => {
  let component: FormsEditViewComponent;
  let fixture: ComponentFixture<FormsEditViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsEditViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
