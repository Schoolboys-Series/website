import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisakisaiComponent } from './misakisai.component';

describe('MisakisaiComponent', () => {
  let component: MisakisaiComponent;
  let fixture: ComponentFixture<MisakisaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisakisaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisakisaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
