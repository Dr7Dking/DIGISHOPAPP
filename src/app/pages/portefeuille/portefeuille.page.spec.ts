import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortefeuillePage } from './portefeuille.page';

describe('PortefeuillePage', () => {
  let component: PortefeuillePage;
  let fixture: ComponentFixture<PortefeuillePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortefeuillePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortefeuillePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
