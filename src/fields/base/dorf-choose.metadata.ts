import { OptionType, IDorfChooseDefinition, DorfChooseDefinition } from './dorf-choose.definition';
import { IDorfFieldMetadata, DorfFieldMetadata } from './dorf-field.metadata';

/**
 * @whatItDoes Represents base {@link DorfFieldMetadata} for the fields with the limited values to choose from.
 *
 * @stable
 */
// tslint:disable-next-line:max-line-length
export abstract class DorfChooseMetadata<T, D extends DorfChooseDefinition<T>> extends DorfFieldMetadata<T, D> implements IDorfChooseDefinition<T> {

    constructor(definition: D, options?: IDorfFieldMetadata<T>) {
        super(definition, options);
    }

    get optionsToSelect() { return this.definition.optionsToSelect; }
}
