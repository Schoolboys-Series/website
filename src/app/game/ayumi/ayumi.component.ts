import { Component } from '@angular/core';

@Component({
    selector: 'scb-ayumi',
    templateUrl: './ayumi.component.html',
    styleUrls: ['./ayumi.component.scss'],
    standalone: false
})
export class AyumiComponent {
    public characters: string[] = [
        'SHINOBU.png',
        'TOMO.png',
        'SAKUYA.png',
        'TSUBASA.png',
        'TSUKI.png',
        'SORA.png',
        'SABURO.png',
        'SHINTARO.png',
        'YUKIO.png',
        'SHIRO.png',
        'NORI.png',
        'YUUHI.png',
        'ITOU.png',
        'KIMURA.png',
        'SATOU.png',
        'KOJIMA.png',
        'OKAJIMA.png',
        'IZUMI.png',
        'KATOU.png',
        'MATSUTA.png'
    ];
}
