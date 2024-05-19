import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StefanPreComponent } from './stefan-pre.component';

describe('StefanPreComponent', () => {
  let component: StefanPreComponent;
  let fixture: ComponentFixture<StefanPreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StefanPreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StefanPreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
