import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IntroPageComponent } from './intro-page/intro-page.component';
import { ExtraComponentsModule } from '../extra-components/extra-components.module';

@NgModule({
    declarations: [
        IntroPageComponent
    ],
    imports: [
        CommonModule,
        MatListModule,
        MatButtonModule,
        HttpClientModule,
        ExtraComponentsModule
    ],
    exports: [
        IntroPageComponent
    ]
})
export class IntroductionModule { }
