import {Component} from '@angular/core';
import {Header} from './core-components/header/header';
import {ProductCardComponent} from './pages/products-list/card/product-card.component';

@Component({
    selector: 'app-root',
    imports: [Header, ProductCardComponent],
    templateUrl: './app.html',
    styleUrl: './app.css',
})
export class App {}
