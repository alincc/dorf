import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

import { newEvent } from '../util/events';

import { DorfConfigService } from '../../src/dorf-config.service';
import { DorfField } from '../../src/fields/base/dorf-field';
import { InputType, DorfInputDefinition } from '../../src/fields/dorf-input.definition';
import { DorfInputMetadata } from '../../src/fields/dorf-input.metadata';
import { DorfCheckboxComponent } from '../../src/fields/dorf-checkbox.component';
import { DorfSelectComponent } from '../../src/fields/dorf-select.component';
import { DorfRadioComponent } from '../../src/fields/dorf-radio.component';
import { DorfInputComponent } from '../../src/fields/dorf-input.component';
import { DorfFieldComponent } from '../../src/fields/base/dorf-field.component';
import { DorfFieldWrapperComponent } from '../../src/fields/base/dorf-field-wrapper.component';

describe('DorfFieldWrapperComponent', () => {

    /**
     * System Under Test - DorfInputComponent with the numeric value.
     */
    let SUT: DorfFieldWrapperComponent<number, DorfInputMetadata<number>>;
    let type = 'number' as InputType;
    let initialValue = 7;
    let labelText = 'Super numeric field';
    let errorMsg = 'Field is required!';

    let fixture: ComponentFixture<typeof SUT>;
    let debugElem: DebugElement;
    let htmlElem: HTMLInputElement;

    beforeEach(async(() => {
        let dorfConfigServiceStub = new DorfConfigService();

        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule],
            declarations: [
                DorfInputComponent,
                DorfRadioComponent,
                DorfSelectComponent,
                DorfCheckboxComponent,
                DorfFieldComponent,
                DorfFieldWrapperComponent
            ],
            providers: [{ provide: DorfConfigService, useValue: dorfConfigServiceStub }]
        }).compileComponents();
    }));

    beforeEach(() => {
        let inputDef: DorfInputDefinition<number>;
        let inputMeta: DorfInputMetadata<number>;

        fixture = TestBed.createComponent(DorfFieldWrapperComponent);

        SUT = fixture.componentInstance;

        inputDef = new DorfInputDefinition<number>({
            type,
            label: labelText,
            validator: Validators.required,
            errorMessage: errorMsg,
            css: {
                field: 'sut',
                error: 'error'
            }
        });

        inputMeta = new DorfInputMetadata<number>(inputDef, {
            key: 'tested',
            value: initialValue
        });

        SUT.metadata = inputMeta;

        let group: { [key: string]: FormControl } = {};
        group[inputMeta.key] = inputMeta.formControl;

        fixture.detectChanges();

        fixture.whenStable().then(() => {
            debugElem = fixture.debugElement.query(By.css('.sut'));
            htmlElem = debugElem.nativeElement;
        });
    });

    it('should display a proper DORF field with a proper label', async(() => {
        fixture.whenStable().then(() => {

            expect(htmlElem.type).toBe(type);
            expect(htmlElem.valueAsNumber).toBe(initialValue);

            let labelElem: HTMLLabelElement = fixture.debugElement.query(By.css('label')).nativeElement;
            expect(labelElem.textContent).toEqual(labelText);
        });
    }));

    it('should display an error message', async(() => {
        fixture.whenStable().then(() => {

            // WHEN
            // trying to spoil the value
            htmlElem.focus();
            htmlElem.value = null;
            htmlElem.dispatchEvent(newEvent('input'));
            htmlElem.blur();

            // THEN
            fixture.detectChanges();
            let errorElem: HTMLDivElement = fixture.debugElement.query(By.css('.error')).nativeElement;
            expect(errorElem.textContent).toBe(errorMsg);
        });
    }));
});
