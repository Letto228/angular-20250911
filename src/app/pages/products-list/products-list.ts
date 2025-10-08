import {signal, ChangeDetectionStrategy, Component, computed} from '@angular/core';
import {Card} from './card/card';
import {Product} from '../../shared/products/product.type';
import {productsMock} from '../../shared/products/products.mock';

@Component({
    selector: 'app-products-list',
    imports: [Card],
    templateUrl: './products-list.html',
    styleUrl: './products-list.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsList {
    index = signal<number>(0);
    maxIndex = productsMock.length;

    product = computed(() => productsMock[this.index()]);

    onBuyEvent(product: Product) {
        confirm(`Добавить ${product.name} в корзину?`);
    }
}
