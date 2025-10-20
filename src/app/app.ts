import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {Header} from './core-components/header/header';
import {ProductsList} from './pages/products-list/products-list';
import {Sidenav} from './core-components/sidenav/sidenav';
import {MatList, MatListItem} from '@angular/material/list';
import {PopupHostComponent} from './popup-host/popup-host';

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

    readonly switchTemplate = signal(true);
    readonly closeTemplate = signal(true);

    constructor() {
        setTimeout(() => {
            this.toggleTemplate();
        }, 1000);

        setTimeout(() => {
            this.toggleTemplate();
        }, 2000);

        setTimeout(() => {
            this.toggleTemplate();
        }, 3000);
    }

    toggleTemplate() {
        // this.switchTemplate.set(!this.switchTemplate());
        this.closeTemplate.set(!this.closeTemplate());
    }
}
