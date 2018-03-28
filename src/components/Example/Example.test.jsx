import React from 'react';
import renderer from 'react-test-renderer';
import { Example } from './Example';

describe('Exmaple', () => {
    test('Renders correctly', () => {
        const jsx = (<Example />);
        const tree = renderer
            .create(jsx)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
