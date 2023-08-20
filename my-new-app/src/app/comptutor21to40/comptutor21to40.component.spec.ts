import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comptutor21to40Component } from './comptutor21to40.component';

describe('Comptutor21to40Component', () => {
  let component: Comptutor21to40Component;
  let fixture: ComponentFixture<Comptutor21to40Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Comptutor21to40Component]
    });
    fixture = TestBed.createComponent(Comptutor21to40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
