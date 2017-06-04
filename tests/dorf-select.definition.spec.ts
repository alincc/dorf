import { DorfField } from '../src/fields/base/dorf-field';
import { DorfSelectDefinition } from './../src/fields/dorf-select.definition';

describe('DorfSelectDefinition', () => {
    it('should have values for "multiple" and "tag" properties', () => {
        // GIVEN + WHEN
        let selectDef = new DorfSelectDefinition();

        // THEN
        expect(selectDef.tag).toEqual(DorfField.SELECT);
        expect(selectDef.multiple).toBeFalsy();
    });
});
