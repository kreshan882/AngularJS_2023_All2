import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponeyComponent } from './about-componey.component';

describe('AboutComponeyComponent', () => {
  let component: AboutComponeyComponent;
  let fixture: ComponentFixture<AboutComponeyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutComponeyComponent]
    });
    fixture = TestBed.createComponent(AboutComponeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
