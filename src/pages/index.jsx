import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';

import configureStore from '../common/store';
import * as actions from '../common/actions';
import * as selectors from '../common/selectors';

import { Example } from '../components/Example';

/**
 * Index page component
 * @class
 */
class IndexPage extends Component {
    static async getInitialProps({ store }) {
        store.dispatch(actions.fetchExample());
        return { };
    }

    render() {
        return <div>
            <Example />
            {this.props.example}
        </div>;
    }
}

IndexPage.propTypes = {
    example: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    example: selectors.selectExample(state).example
});

const IndexPageHOC = withRedux(configureStore, mapStateToProps)(
    withReduxSaga(IndexPage)
);

export default IndexPageHOC;
