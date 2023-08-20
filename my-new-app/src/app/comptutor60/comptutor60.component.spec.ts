import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comptutor60Component } from './comptutor60.component';

describe('Comptutor60Component', () => {
  let component: Comptutor60Component;
  let fixture: ComponentFixture<Comptutor60Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Comptutor60Component]
    });
    fixture = TestBed.createComponent(Comptutor60Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
