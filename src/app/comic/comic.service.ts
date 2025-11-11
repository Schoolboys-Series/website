import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { IComicList } from './IComicList';

@Injectable()
export class ComicService {
    private http = inject(HttpClient);

    private comicList: IComicList | undefined;

    public getComicList(): Observable<IComicList> {
        if (this.comicList == null) {
            const result = this.http.get<IComicList>('https://raw.githubusercontent.com/Schoolboys-Series/comic/master/zh-cn/content.json');
            result.subscribe(e => (this.comicList = e));
            return result;
        } else {
            return of(this.comicList);
        }
    }
}
