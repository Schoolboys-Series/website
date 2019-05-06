import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperScbComponent } from './super-scb.component';

describe('SuperScbComponent', () => {
  let component: SuperScbComponent;
  let fixture: ComponentFixture<SuperScbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperScbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperScbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
