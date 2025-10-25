import {ComponentFixture, TestBed, fakeAsync, tick} from '@angular/core/testing';

import {ProductsList} from './products-list';

describe('ProductsList', () => {
    let component: ProductsList;
    let fixture: ComponentFixture<ProductsList>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ProductsList],
        }).compileComponents();

        fixture = TestBed.createComponent(ProductsList);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should append products when load next data triggers', fakeAsync(() => {
        tick(3000);

        const initialLength = component.products()?.length ?? 0;
        expect(initialLength).toBeGreaterThan(0);

        component.onLoadNextData();

        const updatedLength = component.products()?.length ?? 0;
        expect(updatedLength).toBeGreaterThan(initialLength);
    }));
});
