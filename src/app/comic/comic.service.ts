import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IComicList } from './IComicList';

@Injectable()
export class ComicService {
    private comicList: IComicList | undefined;

    public constructor(private http: HttpClient) {}

    public getComicList(): Observable<IComicList> {
        if (this.comicList == null) {
            const result = this.http.get<IComicList>('https://raw.githubusercontent.com/WinUP/schoolboys_comic/master/zh-cn/content.json');
            result.subscribe(e => this.comicList = e);
            return result;
        } else {
            return of(this.comicList);
        }
    }
}
