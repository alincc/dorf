import { DorfField } from '../src/fields/base/dorf-field';
import { DorfInputDefinition } from '../src/fields/dorf-input.definition';

describe('DorfInputDefinition', () => {
    it('should have default values for type and tag properties', () => {
        // GIVEN + WHEN
        let inputDef = new DorfInputDefinition();

        // THEN
        expect(inputDef.tag).toEqual(DorfField.INPUT);
        expect(inputDef.type).toEqual('text');
    });
});
