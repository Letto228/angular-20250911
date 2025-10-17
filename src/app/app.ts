import {ChangeDetectionStrategy, Component, signal, TemplateRef, ViewChild} from '@angular/core';
import {Header} from './core-components/header/header';
import {ProductsList} from './pages/products-list/products-list';
import {Sidenav} from './core-components/sidenav/sidenav';
import {MatList, MatListItem} from '@angular/material/list';
import {PopupHostComponent} from './shared/popup-host/popup-host';

export type ApplicationConfig = {
    title: string;
    imgUrl: string;
};

@Component({
    selector: 'app-root',
    imports: [Header, ProductsList, Sidenav, MatList, MatListItem, PopupHostComponent],
    templateUrl: './app.html',
    styleUrl: './app.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
    protected readonly rootApplicationConfig: ApplicationConfig = {
        title: 'angular-20250911',
        imgUrl: './favicon.ico',
    };

    readonly currentPopupTemplate = signal<TemplateRef<any> | null>(null);

    showFirstTemplate(template: TemplateRef<any>) {
        this.currentPopupTemplate.set(template);
    }

    showSecondTemplate(template: TemplateRef<any>) {
        this.currentPopupTemplate.set(template);
    }

    closePopup() {
        this.currentPopupTemplate.set(null);
    }
}
