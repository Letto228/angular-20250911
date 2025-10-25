import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {Card} from './card/card';
import {InfiniteScrollDirective} from '../../shared/directives/infinite-scroll/infinite-scroll.directive';
import {productsMock} from '../../shared/products/products.mock';
import {Product} from '../../shared/products/product.type';

@Component({
    selector: 'app-products-list',
    imports: [Card, MatProgressSpinner, InfiniteScrollDirective],
    templateUrl: './products-list.html',
    styleUrl: './products-list.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsList {
    readonly products = signal<Product[] | null>(null);
    private loadedProductsCount = 0;
    private readonly productsBatchSize = 8;

    constructor() {
        this.loadProducts();
    }

    onLoadNextData() {
        console.log('dataLoaded');
    }

    private loadProducts() {
        setTimeout(() => {
            this.loadedProductsCount = Math.min(this.productsBatchSize, productsMock.length);
            this.products.set(productsMock.slice(0, this.loadedProductsCount));
        }, 3000);
    }
}
