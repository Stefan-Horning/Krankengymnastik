import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsteopathieComponent } from './osteopathie.component';

describe('OsteopathieComponent', () => {
  let component: OsteopathieComponent;
  let fixture: ComponentFixture<OsteopathieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsteopathieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OsteopathieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
