import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayVoiceComponent } from './play-voice.component';

describe('PlayVoiceComponent', () => {
  let component: PlayVoiceComponent;
  let fixture: ComponentFixture<PlayVoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayVoiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayVoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
