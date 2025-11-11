import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyumiComponent } from './ayumi.component';
import { GameModule } from '../game.module';

describe('AyumiComponent', () => {
  let component: AyumiComponent;
  let fixture: ComponentFixture<AyumiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ GameModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AyumiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
