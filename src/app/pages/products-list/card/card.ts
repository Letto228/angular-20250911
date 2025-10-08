import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
    Signal,
    WritableSignal,
    input,
} from '@angular/core';
import {
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {MatButton, MatIconButton} from '@angular/material/button';
import {Product} from '../../../shared/products/product.type';

@Component({
    selector: 'app-card',
    imports: [
        MatCard,
        MatCardHeader,
        MatCardTitle,
        MatCardSubtitle,
        MatIcon,
        MatCardActions,
        MatCardContent,
        MatIconButton,
        MatButton,
    ],
    templateUrl: './card.html',
    styleUrl: './card.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card {
    @Input() index!: WritableSignal<number>;
    @Input() product!: Signal<Product>;
    maxIndex = input.required<number>();
    @Output() onBuyEvent = new EventEmitter<Product>();

    incIndex() {
        this.index.update(c => c + 1);
    }

    decIndex() {
        this.index.update(c => c - 1);
    }

    onProductBuy(event: Event) {
        event.stopPropagation();

        // eslint-disable-next-line no-console
        this.onBuyEvent.emit(this.product());
    }

    isStarActive(starIndex: number): boolean {
        return this.product().rating >= starIndex;
    }
}
