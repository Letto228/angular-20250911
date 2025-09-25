import {Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {productsMock} from '../../../shared/products/products.mock';

@Component({
    selector: 'app-product-card',
    imports: [MatCardModule, MatButtonModule],
    templateUrl: './product-card.html',
    styleUrl: './product-card.css',
})
export class ProductCard {
    protected readonly product = productsMock[0];
    protected readonly imageUrl = this.product.images[0].url;

    onCardClick(event: Event) {
        console.log(event);
        console.log('Card clicked!');
    }
}
