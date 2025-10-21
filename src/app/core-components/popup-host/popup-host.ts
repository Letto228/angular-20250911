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
    imports: [],
    templateUrl: './popup-host.html',
    styleUrl: './popup-host.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupHost {
    public readonly template = input.required<TemplateRef<any> | null>();

    private readonly popupViewPortContainer = viewChild.required('popupContent', {
        read: ViewContainerRef,
    });

    constructor() {
        this.insertPopupTemplate();
    }

    protected insertPopupTemplate() {
        effect(() => {
            const template = this.template();

            this.popupViewPortContainer().clear();

            if (template) {
                this.popupViewPortContainer().createEmbeddedView(template);
            }
        });
    }
}
