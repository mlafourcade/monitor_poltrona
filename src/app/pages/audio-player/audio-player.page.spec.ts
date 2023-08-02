import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AudioPlayerPage } from './audio-player.page';

describe('AudioPlayerPage', () => {
  let component: AudioPlayerPage;
  let fixture: ComponentFixture<AudioPlayerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AudioPlayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
