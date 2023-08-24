import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPage404Component } from './no-page404.component';

describe('NoPage404Component', () => {
  let component: NoPage404Component;
  let fixture: ComponentFixture<NoPage404Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoPage404Component]
    });
    fixture = TestBed.createComponent(NoPage404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
