import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KidsPage } from './kids.page';

describe('KidsPage', () => {
  let component: KidsPage;
  let fixture: ComponentFixture<KidsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KidsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
