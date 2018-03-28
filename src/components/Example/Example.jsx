import React from 'react';

import stylesheet from './example.scss';

/**
 * Example component
 * @constructor
 */
export const Example = () => (
    <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div className="example">Example</div>
    </div>);
