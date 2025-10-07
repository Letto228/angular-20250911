import {ChangeDetectionStrategy, Component, output} from '@angular/core';
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
    readonly product = productsMock[0];

    onProductBuy(product: Product): void {
        console.log(product);
    }
}
