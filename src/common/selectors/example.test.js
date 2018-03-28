import * as selectors from './';

describe('Selector example', () => {
    test('returns correct state', () => {
        const state = {
            example: 123
        };

        expect(selectors.selectExample(state)).toEqual(state.example);
    });
});
