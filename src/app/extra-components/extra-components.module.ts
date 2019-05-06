import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PanelComponent } from './panel/panel.component';

@NgModule({
    declarations: [
        PanelComponent
    ],
    imports: [
        CommonModule,
        MatCardModule
    ],
    exports: [
        PanelComponent
    ]
})
export class ExtraComponentsModule { }
