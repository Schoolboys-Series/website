import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ComicListComponent } from '../comic-list/comic-list.component';

@Component({
    selector: 'scb-comic-reader',
    templateUrl: './comic-reader.component.html',
    styleUrls: ['./comic-reader.component.scss'],
    standalone: false
})
export class ComicReaderComponent implements OnInit {
    @ViewChild('comicList') public comicList: ComicListComponent | undefined;
    public anchorListPosition: boolean = false;
    public comicListHeight: number = 0;
    public hideComicList: boolean = false;
    public images: string[] = [];

    public ngOnInit(): void {
        this.onWindowScroll();
    }

    @HostListener('window:scroll', [])
    @HostListener('window:resize', [])
    public onWindowScroll(): void {
        const distance = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0) - (window.innerWidth > 600 ? 204 : 106);
        this.anchorListPosition = distance > 0;
        this.comicListHeight = Math.min(window.innerHeight, window.innerHeight + distance);
    }

    public onComicChoose(urls: string[]): void {
        this.hideComicList = true;
        this.images = urls;
        setTimeout(() => {
            window.scrollTo({ top: window.innerWidth > 600 ? 204 : 106 });
        }, 100);
    }

    public previous(): void {
        this.comicList && this.comicList.previous();
    }

    public next(): void {
        this.comicList && this.comicList.next();
    }
}
