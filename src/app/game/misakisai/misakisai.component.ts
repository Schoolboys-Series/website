import { Component } from '@angular/core';

@Component({
    selector: 'scb-misakisai',
    templateUrl: './misakisai.component.html',
    styleUrls: ['./misakisai.component.scss']
})
export class MisakisaiComponent {
    public download(destination: string): void {
        switch (destination) {
            case 'freem':
                window.open('https://www.freem.ne.jp/dl/win/14436', '_blank');
                break;
            case 'baidu':
                window.open('https://pan.baidu.com/s/1OUQbeID__bV-ycahlHYUfw?pwd=i51i', '_blank');
                break;
        }
    }
}
