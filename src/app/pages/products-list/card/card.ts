import {Component} from '@angular/core';
import {productsMock} from '../../../shared/products/products.mock';
import {MatCardModule} from '@angular/material/card';

@Component({
    selector: 'app-card',
    imports: [MatCardModule],
    templateUrl: './card.html',
    styleUrl: './card.css',
})
export class Card {
    readonly product = productsMock[0];

    onCardClick($event: Event): void {
        console.log($event);
    }
}
