import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriesPage } from './favories.page';

describe('FavoriesPage', () => {
  let component: FavoriesPage;
  let fixture: ComponentFixture<FavoriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
