import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AyumiComponent } from './ayumi.component';

describe('AyumiComponent', () => {
  let component: AyumiComponent;
  let fixture: ComponentFixture<AyumiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyumiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AyumiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
