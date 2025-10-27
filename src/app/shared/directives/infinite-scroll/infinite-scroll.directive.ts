import {Directive, ElementRef, HostListener, inject, input, output} from '@angular/core';

@Directive({
    selector: '[appInfiniteScroll]',
    standalone: true,
    host: {'(scroll)': 'handleScroll()'},
})
export class InfiniteScrollDirective {
    readonly borderOffset = input(100);

    readonly loadNextData = output<void>();

    private previousScrollTop = 0;
    private isWithinOffsetZone = false;
    private readonly elementHost = inject(ElementRef);

    handleScroll() {
        const element = this.elementHost.nativeElement;
        const {scrollTop, clientHeight, scrollHeight} = element;

        const distanceFromBottom = scrollHeight - (scrollTop + clientHeight);
        const isInsideOffsetZone = distanceFromBottom <= this.borderOffset();
        if (!isInsideOffsetZone) {
            this.isWithinOffsetZone = false;
        }

        const isScrollingDown = scrollTop > this.previousScrollTop;
        this.previousScrollTop = scrollTop;

        if (!isScrollingDown || !isInsideOffsetZone || this.isWithinOffsetZone) {
            return;
        }

        this.isWithinOffsetZone = true;
        this.loadNextData.emit();
    }
}
