import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BocComponent } from './boc.component';

describe('BocComponent', () => {
  let component: BocComponent;
  let fixture: ComponentFixture<BocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BocComponent]
    });
    fixture = TestBed.createComponent(BocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


//60 component testing
//1 variable
it("Testing K: Title Variavle............",()=>{
  expect(component.componentName).toBe("Test BOC")
})

//2 functiom
it("Testing K: add() function.............",()=>{
  expect(component.add(40,60)).toBe(100)
})

//3 html element
it("Testing K: HTML element.............",()=>{
  const data =fixture.nativeElement;
  expect(data.querySelector(".textclass").textContent).toContain("BOC")
})


});
