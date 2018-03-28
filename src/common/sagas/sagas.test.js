import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { expectSaga } from 'redux-saga-test-plan';
import * as actions from '../actions';
import rootReducer from '../reducers';
import rootSaga from './';
import { buildUrl } from '../config';

describe('Saga settings', () => {
    let mock = null;
    const mockData = {
        example: 'ok'
    };

    beforeEach(() => {
        mock = new MockAdapter(axios);

        mock.onGet(buildUrl('/api/example')).reply(200, mockData);
    });
    test('puts fetch success action', () => {
        return expectSaga(rootSaga)
            .withReducer(rootReducer)
            .put(actions.fetchExampleSuccess(mockData))
            .dispatch(actions.fetchExample())
            .run();
    });
});
