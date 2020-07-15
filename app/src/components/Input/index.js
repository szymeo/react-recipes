import React, { forwardRef } from 'react';

import Input from './layout';

export default forwardRef(({
    label,
    name,
    ...props
}, ref) => {
    return (
        <Input.Label htmlFor={name}>
            <Input
                id={name}
                name={name}
                ref={ref}
                {...props}
            />
        </Input.Label>
    );
});
