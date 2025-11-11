import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisakisaiComponent } from './misakisai.component';
import { GameModule } from '../game.module';

describe('MisakisaiComponent', () => {
  let component: MisakisaiComponent;
  let fixture: ComponentFixture<MisakisaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ GameModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisakisaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
