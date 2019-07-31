import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutiquesPage } from './boutiques.page';

describe('BoutiquesPage', () => {
  let component: BoutiquesPage;
  let fixture: ComponentFixture<BoutiquesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoutiquesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutiquesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
