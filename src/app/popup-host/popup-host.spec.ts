import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PopupHostComponent} from './popup-host';

describe('PopupHost', () => {
    let component: PopupHostComponent;
    let fixture: ComponentFixture<PopupHostComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PopupHostComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(PopupHostComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
