import {Directive, ElementRef, inject, output} from '@angular/core';
import {throttle} from '../helpers/throttle';

@Directive({
    selector: '[appScrollWithLoading]',
    host: {
        '(scroll)': 'onScroll()',
    },
})
export class ScrollWithLoading {
    protected readonly loadNextData = output();
    protected elementRef = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

    protected throttledLoadNextData = throttle(() => {
        this.loadNextData.emit();
    }, 2000);

    onScroll() {
        const {scrollTop, scrollHeight, clientHeight} = this.elementRef;
        const scrollBottom = scrollHeight - scrollTop - clientHeight;

        if (scrollBottom <= 100) {
            this.throttledLoadNextData();
        }
    }
}
