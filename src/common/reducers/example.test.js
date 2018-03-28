import * as actions from '../actions';
import example from './example';

describe('Reducer exmaple', () => {
    test('has default state', () => {
        expect(example()).not.toBeUndefined();
    });
    test('passes the state on unknown action', () => {
        const someState = '123';

        expect(example(someState)).toEqual(someState);
    });
    test('updates the state', () => {
        expect(example(null, actions.fetchExampleSuccess({ test: 123 })))
            .toHaveProperty('test', 123);
    });
});
