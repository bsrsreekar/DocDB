import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTestPage } from './search-test.page';

describe('SearchTestPage', () => {
  let component: SearchTestPage;
  let fixture: ComponentFixture<SearchTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
