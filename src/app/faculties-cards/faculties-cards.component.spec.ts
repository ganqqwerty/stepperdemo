import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultiesCardsComponent } from './faculties-cards.component';

describe('FacultiesCardsComponent', () => {
  let component: FacultiesCardsComponent;
  let fixture: ComponentFixture<FacultiesCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultiesCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultiesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
