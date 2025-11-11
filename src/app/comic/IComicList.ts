export interface IComicList {
    server: string;
    categoryNameFormat: string;
    comics: (IComicCategory | IComicRange)[];
}

export interface IComicItem {
    type: string;
}

export interface IComicCategory extends IComicItem {
    type: 'category';
    name: string;
    url: string;
    count: number;
    fixLength?: number;
}

export interface IComicRange extends IComicItem {
    type: 'range';
    min: number;
    max: number;
    fixLength?: number;
}
