import {NgStyle} from '@angular/common';
import {Component, Input, OnInit, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
    selector: 'app-card',
    imports: [MatCardModule, NgStyle],
    templateUrl: './card.html',
    styleUrl: './card.css',
})
export class Card implements AfterViewInit {
    @ViewChild('grayStars') grayStarsRef!: ElementRef;
    @Input() product: any;

    starsWidth = 0;

    ngAfterViewInit() {
        console.log(this.grayStarsRef.nativeElement);
        this.starsWidth = this.grayStarsRef.nativeElement.offsetWidth;
    }

    onClick() {
        console.log(this.product);
    }
}
