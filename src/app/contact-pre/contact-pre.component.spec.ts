import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPreComponent } from './contact-pre.component';

describe('ContactPreComponent', () => {
  let component: ContactPreComponent;
  let fixture: ComponentFixture<ContactPreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactPreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactPreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
