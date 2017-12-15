import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHealthServicesComponent } from './search-health-services.component';

describe('SearchHealthServicesComponent', () => {
  let component: SearchHealthServicesComponent;
  let fixture: ComponentFixture<SearchHealthServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchHealthServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHealthServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
