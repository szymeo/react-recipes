import React, { forwardRef } from 'react';

import TextArea from './layout';

export default forwardRef(({
    label,
    name,
    ...props
}, ref) => {
    return (
        <TextArea
            id={name}
            name={name}
            ref={ref}
            {...props}
        />
    );
});
