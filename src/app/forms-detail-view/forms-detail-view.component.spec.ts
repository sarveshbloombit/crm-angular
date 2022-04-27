import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsDetailViewComponent } from './forms-detail-view.component';

describe('FormsDetailViewComponent', () => {
  let component: FormsDetailViewComponent;
  let fixture: ComponentFixture<FormsDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsDetailViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
