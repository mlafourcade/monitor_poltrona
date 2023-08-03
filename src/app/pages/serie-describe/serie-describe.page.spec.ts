import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SerieDescribePage } from './serie-describe.page';

describe('SerieDescribePage', () => {
  let component: SerieDescribePage;
  let fixture: ComponentFixture<SerieDescribePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SerieDescribePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
