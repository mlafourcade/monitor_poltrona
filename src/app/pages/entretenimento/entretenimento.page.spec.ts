import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntretenimentoPage } from './entretenimento.page';

describe('EntretenimentoPage', () => {
  let component: EntretenimentoPage;
  let fixture: ComponentFixture<EntretenimentoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EntretenimentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
