import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaybackPage } from './playback.page';

describe('PlaybackPage', () => {
  let component: PlaybackPage;
  let fixture: ComponentFixture<PlaybackPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlaybackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
