import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtbComponent } from './ntb.component';

describe('NtbComponent', () => {
  let component: NtbComponent;
  let fixture: ComponentFixture<NtbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NtbComponent]
    });
    fixture = TestBed.createComponent(NtbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
