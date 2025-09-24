import {Component} from '@angular/core';
import {Card} from './card/card';
import {productsMock} from '../../shared/products/products.mock';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'app-products-list',
    imports: [Card, CommonModule],
    templateUrl: './products-list.html',
    styleUrl: './products-list.css',
})
export class ProductsList {
    products = productsMock;
}
