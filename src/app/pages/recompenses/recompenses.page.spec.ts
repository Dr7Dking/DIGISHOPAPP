import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecompensesPage } from './recompenses.page';

describe('RecompensesPage', () => {
  let component: RecompensesPage;
  let fixture: ComponentFixture<RecompensesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecompensesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecompensesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
