import {
    ChangeDetectionStrategy,
    Component,
    effect,
    input,
    TemplateRef,
    viewChild,
    ViewContainerRef,
} from '@angular/core';

@Component({
    selector: 'app-popup-host',
    standalone: true,
    imports: [],
    templateUrl: './popup-host.html',
    styleUrl: './popup-host.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupHostComponent {
    readonly viewportContainer = viewChild.required('viewport', {read: ViewContainerRef});

    readonly template = input<TemplateRef<unknown> | null>();

    private updatePopup() {
        effect(() => {
            this.viewportContainer().clear();

            if (this.template()) {
                this.viewportContainer().createEmbeddedView(this.template()!);
            }
        });
    }

    constructor() {
        this.updatePopup();
    }
}
