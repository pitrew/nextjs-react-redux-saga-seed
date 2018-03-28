import * as actions from './';
import * as constants from '../constants';

describe('Actions', () => {
    describe('fetchExample', () => {
        test('produces correct type', () => {
            expect(actions.fetchExample())
                .toHaveProperty('type', constants.EXAMPLE_FETCH_REQ);
        });
    });
    describe('fetchExampleSuccess', () => {
        test('produces correct type', () => {
            expect(actions.fetchExampleSuccess())
                .toHaveProperty('type', constants.EXAMPLE_FETCH_SUCCESS);
        });
        test('has correct data', () => {
            const data = '123';

            expect(actions.fetchExampleSuccess(data))
                .toHaveProperty('data', data);
        });
    });
});
