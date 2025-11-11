import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';

import { ComicService } from '../comic.service';
import { IComicList, IComicCategory, IComicRange, IComicItem } from '../IComicList';

@Component({
    selector: 'scb-comic-list',
    templateUrl: './comic-list.component.html',
    styleUrls: ['./comic-list.component.scss'],
    standalone: false
})
export class ComicListComponent implements OnInit {
    @Output() public choose: EventEmitter<string[]> = new EventEmitter<string[]>();
    public comicList: IComicList | undefined;
    public activeComic: IComicItem | undefined;

    public constructor(private comicService: ComicService) {}

    private static isComicCategory(item: IComicItem): item is IComicCategory {
        return item.type === 'category';
    }

    private static isComicRange(item: IComicItem): item is IComicRange {
        return item.type === 'range';
    }

    private static fixNumberLength(source: number, length?: number): string {
        return length == null ? `${source}` : `${source}`.padStart(length, '0');
    }

    public ngOnInit(): void {
        this.comicService.getComicList().subscribe(e => {
            this.comicList = e;
        });
    }

    public createComicName(item: IComicItem): string {
        if (ComicListComponent.isComicCategory(item)) {
            return `短篇《${item.name}》`;
        } else if (ComicListComponent.isComicRange(item)) {
            return `${item.min} - ${item.max}`;
        } else {
            return `UNKNOWN ${item.type}`;
        }
    }

    public onClickListItem(item: IComicItem): void {
        const result: string[] = [];
        if (this.comicList == null || this.comicList.comics.length === 0) {
            return;
        }
        if (ComicListComponent.isComicCategory(item)) {
            for (let i = 0; ++i <= item.count; ) {
                const name = this.comicList.categoryNameFormat
                    .replace(/\{url\}/g, item.url)
                    .replace(/\{name\}/g, item.name)
                    .replace(/\{count\}/g, `${item.count}`)
                    .replace(/\{index\}/g, ComicListComponent.fixNumberLength(i, item.fixLength));
                result.push(this.comicList.server.replace(/\{name\}/g, name));
            }
        } else if (ComicListComponent.isComicRange(item)) {
            for (let i = item.min - 1; ++i <= item.max; ) {
                result.push(this.comicList.server.replace(/\{name\}/g, ComicListComponent.fixNumberLength(i, item.fixLength)));
            }
        }
        this.choose.emit(result);
        this.activeComic = item;
    }

    public next(): void {
        if (this.comicList == null || this.comicList.comics.length === 0) {
            return;
        }
        if (this.activeComic == null) {
            this.onClickListItem(this.comicList.comics[0]);
            return;
        }
        const index = this.comicList.comics.findIndex(e => e === this.activeComic);
        if (index < 0 || index === this.comicList.comics.length - 1) {
            return;
        }
        this.onClickListItem(this.comicList.comics[index + 1]);
    }

    public previous(): void {
        if (this.comicList == null || this.comicList.comics.length === 0) {
            return;
        }
        if (this.activeComic == null) {
            this.onClickListItem(this.comicList.comics[0]);
            return;
        }
        const index = this.comicList.comics.findIndex(e => e === this.activeComic);
        if (index <= 0) {
            return;
        }
        this.onClickListItem(this.comicList.comics[index - 1]);
    }
}
