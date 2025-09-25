import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Header} from '../../../core-components/header/header';
import {productsMock} from '../../../shared/products/products.mock';
import {
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardImage,
    MatCardTitle,
} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Product} from '../../../shared/products/product.type';

@Component({
    selector: 'app-product-card',
    imports: [
        MatCard,
        MatCardHeader,
        MatCardTitle,
        MatCardContent,
        MatCardActions,
        MatCardImage,
        MatButton,
    ],
    templateUrl: './product-card.component.html',
    styleUrl: './product-card.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
    private readonly _snackBar = inject(MatSnackBar);

    protected product: Product = productsMock[0] ?? null;

    onClick(): void {
        this._snackBar.open(`"${this.product.name}" добавлен в корзину`, 'Закрыть', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
        });
    }
}
