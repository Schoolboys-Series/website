import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { NgModule } from '@angular/core';

import { ExtraComponentsModule } from './extra-components/extra-components.module';
import { IntroductionModule } from './introduction/introduction.module';
import { AppRoutingModule } from './app-routing.module';
import { AddonModule } from './addon/addon.module';
import { ComicModule } from './comic/comic.module';
import { GameModule } from './game/game.module';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        GameModule,
        AddonModule,
        ComicModule,
        BrowserModule,
        MatMenuModule,
        MatButtonModule,
        AppRoutingModule,
        MatToolbarModule,
        IntroductionModule,
        ExtraComponentsModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
