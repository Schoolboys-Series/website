import { Component } from '@angular/core';

@Component({
    selector: 'scb-super-scb',
    templateUrl: './super-scb.component.html',
    styleUrls: ['./super-scb.component.scss']
})
export class SuperScbComponent {
    public download(destination: string): void {
        switch (destination) {
            case 'freem':
                window.open('https://www.freem.ne.jp/dl/win/20067', '_blank');
                break;
            case 'baidu':
                window.open('https://pan.baidu.com/s/1a0g5KX_poJ156lr_2OPelw?pwd=r998', '_blank');
                break;
        }
    }
}
