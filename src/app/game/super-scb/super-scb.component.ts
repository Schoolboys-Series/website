import { Component } from '@angular/core';

@Component({
    selector: 'scb-super-scb',
    templateUrl: './super-scb.component.html',
    styleUrls: ['./super-scb.component.scss']
})
export class SuperScbComponent {
    public download(): void {
        window.open('https://www.freem.ne.jp/dl/win/20067', '_blank');
    }
}
