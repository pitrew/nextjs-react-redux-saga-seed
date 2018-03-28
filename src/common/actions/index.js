import * as constants from '../constants';

/**
 * Example actions
 */
export const fetchExample = () => ({ type: constants.EXAMPLE_FETCH_REQ });
export const fetchExampleSuccess = data => ({ type: constants.EXAMPLE_FETCH_SUCCESS, data });
