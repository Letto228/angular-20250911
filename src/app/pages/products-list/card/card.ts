import {NgStyle} from '@angular/common';
import {Component, Input, OnInit} from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
    selector: 'app-card',
    imports: [MatCardModule, NgStyle],
    templateUrl: './card.html',
    styleUrl: './card.css',
})
export class Card implements OnInit {
    @Input() product: any;

    ngOnInit() {
        console.log(this.product);
    }

    onClick() {
        console.log(this.product);
    }
}
