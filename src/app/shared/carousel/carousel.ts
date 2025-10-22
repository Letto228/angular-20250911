import {
    computed,
    Directive,
    effect,
    inject,
    input,
    signal,
    TemplateRef,
    ViewContainerRef,
} from '@angular/core';

type DataContext<Image> = {
    $implicit: Image | null;
    appCarouselOf: Image[];
    back: () => void;
    next: () => void;
};

@Directive({
    selector: '[appCarousel]',
})
export class Carousel<Image> {
    private readonly template = inject<TemplateRef<DataContext<Image>>>(TemplateRef);
    private readonly viewContainrer = inject(ViewContainerRef);

    public readonly appCarouselOf = input.required<Image[]>();
    private readonly imageIndex = signal<number>(0);

    private readonly currentImage = computed(() => this.appCarouselOf()?.[this.imageIndex()]);

    constructor() {
        this.insertContent();
        this.resetInvalidIndex();
    }

    private insertContent() {
        effect(() => {
            this.viewContainrer?.clear();
            this.viewContainrer.createEmbeddedView(this.template, {
                $implicit: this.currentImage(),
                appCarouselOf: this.appCarouselOf(),
                back: () => this.back(),
                next: () => this.next(),
            });
        });
    }

    private next() {
        this.imageIndex.set(this.imageIndex() + 1);
    }

    private back() {
        if (this.imageIndex() === 0) {
            this.imageIndex.set(this.appCarouselOf().length - 1);
        } else {
            this.imageIndex.set(this.imageIndex() - 1);
        }
    }

    private resetInvalidIndex() {
        effect(() => {
            if (this.imageIndex() >= this.appCarouselOf().length) {
                this.imageIndex.set(0);
            }
        });
    }
}
