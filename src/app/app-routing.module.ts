import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ComicReaderComponent } from './comic/comic-reader/comic-reader.component';
import { IntroPageComponent } from './introduction/intro-page/intro-page.component';
import { SuperScbComponent } from './game/super-scb/super-scb.component';
import { AddonComponent } from './addon/addon/addon.component';
import { AyumiComponent } from './game/ayumi/ayumi.component';
import { MisakisaiComponent } from './game/misakisai/misakisai.component';
import { GameComponent } from './game/game/game.component';

const routes: Routes = [
    { path: 'intro', component: IntroPageComponent },
    { path: 'comic', component: ComicReaderComponent },
    {
        path: 'game',
        component: GameComponent,
        children: [
            { path: 'ayumi', component: AyumiComponent },
            { path: 'super_scb', component: SuperScbComponent },
            { path: 'misakisai', component: MisakisaiComponent }
        ]
    },
    { path: 'addon', component: AddonComponent },
    { path: '', redirectTo: 'intro', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
