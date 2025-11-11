import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComicReaderComponent } from './comic-reader/comic-reader.component';
import { ComicService } from './comic.service';
import { ComicListComponent } from './comic-list/comic-list.component';

@NgModule({ declarations: [ComicReaderComponent, ComicListComponent],
    exports: [
        ComicReaderComponent
    ], imports: [CommonModule,
        MatListModule,
        MatButtonModule], providers: [
        ComicService,
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class ComicModule { }
