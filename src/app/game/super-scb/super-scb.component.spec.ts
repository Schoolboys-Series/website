import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperScbComponent } from './super-scb.component';
import { GameModule } from '../game.module';

describe('SuperScbComponent', () => {
    let component: SuperScbComponent;
    let fixture: ComponentFixture<SuperScbComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [GameModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SuperScbComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
