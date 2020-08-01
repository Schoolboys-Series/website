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
                window.open('https://pan.baidu.com/s/1CVZg1gxNv8-tE5SDg4bx8A', '_blank');
                break;
            case 'mega':
                window.open('https://mega.nz/file/MB4mgCpR#o27MmejDONjutoKmKUU-DvTljQOGdTKxQoSCw3_8i2U', '_blank');
                break;
        }
    }
}
