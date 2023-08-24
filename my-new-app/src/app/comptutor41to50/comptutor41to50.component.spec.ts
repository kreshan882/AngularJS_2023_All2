import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comptutor41to50Component } from './comptutor41to50.component';

describe('Comptutor41to50Component', () => {
  let component: Comptutor41to50Component;
  let fixture: ComponentFixture<Comptutor41to50Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Comptutor41to50Component]
    });
    fixture = TestBed.createComponent(Comptutor41to50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
