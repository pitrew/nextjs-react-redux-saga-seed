import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import { buildUrl } from '../config';
import * as constants from '../constants';
import * as actions from '../actions';

/**
 * Retrieve date from server
 * @param {string} baseUrl Base url
 * @return {Promise<Object | null>} Promise that resolves to response data
 */
const getData = async () => {
    try {
        const response = await axios.get(buildUrl('/api/example'));

        return response.data;
    } catch (e) {
        console.log(e);
    }
    return null;
};

function *testSaga() {
    const data = yield call(getData);

    yield put(actions.fetchExampleSuccess(data));
}

function *rootSaga() {
    yield takeEvery(constants.EXAMPLE_FETCH_REQ, testSaga);
}

export default rootSaga;
