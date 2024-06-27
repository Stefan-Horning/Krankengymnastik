import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricePreComponent } from './price-pre.component';

describe('PricePreComponent', () => {
  let component: PricePreComponent;
  let fixture: ComponentFixture<PricePreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricePreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PricePreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
