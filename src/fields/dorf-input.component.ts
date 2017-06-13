import { Component } from '@angular/core';

import { InputType, IDorfInputDefinition } from './dorf-input.definition';
import { DorfInputMetadata } from './dorf-input.metadata';
import { AbstractDorfFieldComponent } from './base/abstract-dorf-field.component';
import { DorfField } from './base/dorf-field';

import { DorfConfigService } from '../dorf-config.service';

/**
 * DORF input field which consumes {@link DorfInputMetadata} for rendering.
 * One of the predefined DORF fields.
 *
 * @stable
 */
@Component({
    moduleId: `${module.id}`,
    selector: DorfField.INPUT,
    templateUrl: './dorf-input.component.html'
})
export class DorfInputComponent<T> extends AbstractDorfFieldComponent<T, DorfInputMetadata<T>> implements IDorfInputDefinition<T> {

    /** @inheritdoc */
    constructor(config: DorfConfigService) {
        super(config);
    }

    /** @inheritdoc */
    get type() { return this.metadata.type; }
    get isRange() { return this.type === 'range' as InputType; }
    get isNumber() { return this.type === 'number' as InputType; }
    get isOtherType() { return !this.isRange && !this.isNumber; }
}
