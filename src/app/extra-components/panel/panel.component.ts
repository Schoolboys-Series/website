import { Component, Input } from '@angular/core';

@Component({
    selector: 'scb-panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.scss'],
    standalone: false
})
export class PanelComponent {
    @Input() public title: string | undefined;
    @Input() public titleAlign: string | undefined;
    @Input() public color: string | undefined;
}
