import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeilkundeComponent } from './heilkunde.component';

describe('HeilkundeComponent', () => {
  let component: HeilkundeComponent;
  let fixture: ComponentFixture<HeilkundeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeilkundeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeilkundeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
