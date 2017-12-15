import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferrerNotesComponent } from './referrer-notes.component';

describe('ReferrerNotesComponent', () => {
  let component: ReferrerNotesComponent;
  let fixture: ComponentFixture<ReferrerNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferrerNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferrerNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
