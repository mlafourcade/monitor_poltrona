import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DescribePage } from './describe.page';

describe('DescribePage', () => {
  let component: DescribePage;
  let fixture: ComponentFixture<DescribePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DescribePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
