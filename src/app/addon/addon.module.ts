import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ExtraComponentsModule } from '../extra-components/extra-components.module';
import { AddonComponent } from './addon/addon.component';

@NgModule({
    declarations: [AddonComponent],
    imports: [CommonModule, MatButtonModule, ExtraComponentsModule],
    exports: [AddonComponent]
})
export class AddonModule {}
