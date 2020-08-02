import { Component } from '@angular/core';

@Component({
    selector: 'scb-intro-page',
    templateUrl: './intro-page.component.html',
    styleUrls: ['./intro-page.component.scss']
})
export class IntroPageComponent {
    public download(destination: string): void {
        switch (destination) {
            case 'freem':
                window.open('https://www.freem.ne.jp/dl/win/20067', '_blank');
                break;
            case 'baidu':
                window.open('https://pan.baidu.com/s/1FbYcLMa94KE8sSbjtB_ROg', '_blank');
                break;
            case 'mega':
                window.open('https://mega.nz/folder/8YADFIgT#XQOp9ph3PZCtZg8B7az0sw', '_blank');
                break;
        }
    }
}
