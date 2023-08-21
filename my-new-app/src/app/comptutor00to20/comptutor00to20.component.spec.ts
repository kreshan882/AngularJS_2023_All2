import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comptutor00to20Component } from './comptutor00to20.component';

describe('Comptutor60Component', () => {
  let component: Comptutor00to20Component;
  let fixture: ComponentFixture<Comptutor00to20Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Comptutor00to20Component]
    });
    fixture = TestBed.createComponent(Comptutor00to20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
