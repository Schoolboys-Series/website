import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IntroPageComponent } from './intro-page/intro-page.component';
import { ExtraComponentsModule } from '../extra-components/extra-components.module';
import { GameModule } from '../game/game.module';

@NgModule({
    declarations: [IntroPageComponent],
    exports: [IntroPageComponent],
    imports: [CommonModule, MatListModule, MatButtonModule, ExtraComponentsModule, GameModule],
    providers: [provideHttpClient(withInterceptorsFromDi())]
})
export class IntroductionModule {}
