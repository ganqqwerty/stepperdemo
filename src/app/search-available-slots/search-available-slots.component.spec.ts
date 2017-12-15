import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAvailableSlotsComponent } from './search-available-slots.component';

describe('SearchAvailableSlotsComponent', () => {
  let component: SearchAvailableSlotsComponent;
  let fixture: ComponentFixture<SearchAvailableSlotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAvailableSlotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAvailableSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
