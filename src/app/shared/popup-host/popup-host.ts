import {
    Component,
    TemplateRef,
    ViewContainerRef,
    signal,
    effect,
    input,
    viewChild,
} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'app-popup-host',
    templateUrl: './popup-host.html',
    styleUrls: ['./popup-host.css'],
    standalone: true,
    imports: [CommonModule],
})
export class PopupHostComponent {
    template = input<TemplateRef<any> | null>(null);

    container = viewChild('container', {read: ViewContainerRef});

    constructor() {
        effect(() => {
            const currentTemplate = this.template();
            const viewContainer = this.container();

            if (viewContainer) {
                viewContainer.clear();

                if (currentTemplate) {
                    viewContainer.createEmbeddedView(currentTemplate);
                }
            }
        });
    }
}
