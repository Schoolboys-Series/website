import { Component } from '@angular/core';

@Component({
    selector: 'scb-intro-page',
    templateUrl: './intro-page.component.html',
    styleUrls: ['./intro-page.component.scss']
})
export class IntroPageComponent {
    public download(): void {
        window.open('https://www.freem.ne.jp/dl/win/20067', '_blank');
    }
}
