import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MomoPage } from './momo.page';

describe('MomoPage', () => {
  let component: MomoPage;
  let fixture: ComponentFixture<MomoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MomoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MomoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
