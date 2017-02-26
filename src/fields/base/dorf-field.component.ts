import { Component } from '@angular/core';

import { DorfConfigService } from '../../dorf-config.service';
import { DorfFieldDefinition } from './dorf-field.definition';
import { DorfFieldMetadata } from './dorf-field.metadata';
import { AbstractDorfFieldComponent } from './abstract-dorf-field.component';
import { DorfField } from './dorf-field';

/**
 * @whatItDoes Component which switch between all DORF fields.
 *
 * @howToUse
 * It is used within all the default form templates.
 *
 * ##Example
 * ```
 * <dorf-field [metadata]="fieldMeta">
 *   <star-rating *ngIf="fieldMeta.tag === 'star-rating'" [metadata]="fieldMeta"></star-rating>
 * </dorf-field>
 * ```
 *
 * @description
 * There are 4 base fields + additional ones, passed with {@link DorfConfigService}.
 * This component groups all those fields in order to speed up HTML creation. It is possible to include custom HTML code between tags.
 *
 * @stable
 */
@Component({
    moduleId: `${module.id}`,
    selector: 'dorf-field',
    templateUrl: './dorf-field.component.html'
})
export class DorfFieldComponent<T, M extends DorfFieldMetadata<T, DorfFieldDefinition<T>>> extends AbstractDorfFieldComponent<T, M> {

    constructor(config: DorfConfigService) {
        super(config);
    }

    get isDorfInput() {
        return this.isDorfTag(DorfField.INPUT);
    }

    get isDorfRadio() {
        return this.isDorfTag(DorfField.RADIO);
    }

    get isDorfSelect() {
        return this.isDorfTag(DorfField.SELECT);
    }

    get isDorfCheckbox() {
        return this.isDorfTag(DorfField.CHECKBOX);
    }

    protected isDorfTag(tag: string) {
        return this.metadata.tag === tag;
    }
}
