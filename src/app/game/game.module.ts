import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ExtraComponentsModule } from '../extra-components/extra-components.module';
import { SuperScbComponent } from './super-scb/super-scb.component';
import { AyumiComponent } from './ayumi/ayumi.component';
import { GameComponent } from './game/game.component';

@NgModule({
    declarations: [AyumiComponent, GameComponent, SuperScbComponent],
    imports: [
        CommonModule,
        RouterModule,
        MatListModule,
        MatButtonModule,
        ExtraComponentsModule,
    ],
    exports: [
        GameComponent,
        AyumiComponent,
        SuperScbComponent
    ]
})
export class GameModule { }
