import { Component } from '@angular/core';

import { IDorfCommonCssClasses } from '../base/dorf-css-classes';
import { IDorfRadioDefinition } from './dorf-radio.definition';
import { DorfRadioMetadata } from './dorf-radio.metadata';
import { DorfChooseComponent } from './base/abstract-dorf-choose.component';
import { DorfField } from './base/dorf-field';

import { DorfConfigService } from '../dorf-config.service';

/**
 * DORF radio field which consumes {@link DorfRadioMetadata} for rendering.
 * One of the predefined DORF fields.
 *
 * @stable
 */
@Component({
    moduleId: `${module.id}`,
    selector: DorfField.RADIO,
    templateUrl: './dorf-radio.component.html'
})
export class DorfRadioComponent<T> extends DorfChooseComponent<T, DorfRadioMetadata<T>> implements IDorfRadioDefinition<T> {
    /** @inheritdoc */
    constructor(config: DorfConfigService) {
        super(config);
    }

    get innerLabelCss() { return this.getCss('innerLabel'); }
}
