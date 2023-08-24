import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserkComponent } from './userk.component';

describe('UserkComponent', () => {
  let component: UserkComponent;
  let fixture: ComponentFixture<UserkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserkComponent]
    });
    fixture = TestBed.createComponent(UserkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
