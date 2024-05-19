import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysiotherapieComponent } from './physiotherapie.component';

describe('PhysiotherapieComponent', () => {
  let component: PhysiotherapieComponent;
  let fixture: ComponentFixture<PhysiotherapieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhysiotherapieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhysiotherapieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
