import * as constants from '../constants';

const defaultState = {
    example: ''
};
const example = (state = defaultState, action) => {
    const actions = {
        [constants.EXAMPLE_FETCH_SUCCESS]: () => action.data
    };

    return (action && actions[action.type]) ? actions[action.type]() : state;
};

export default example;
