import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmerseComponent } from './immerse.component';

describe('ImmerseComponent', () => {
  let component: ImmerseComponent;
  let fixture: ComponentFixture<ImmerseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImmerseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImmerseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
