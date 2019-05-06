import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'scb-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public constructor(private router: Router) { }

    public navigateTo(target: string): void {
        switch (target) {
            case 'intro':
                this.router.navigate(['/intro']);
                break;
            case 'comic':
                this.router.navigate(['/comic']);
                break;
            case 'ayumi':
                this.router.navigate([`/game/ayumi`]);
                break;
            case 'super_scb':
                this.router.navigate([`/game/super_scb`]);
                break;
            case 'addon':
            this.router.navigate(['/addon']);
                break;
        }
    }
}
