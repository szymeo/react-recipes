import React, { useState } from 'react';
// import styled from 'styled-components';

import Collapsible from './layout';

export default ({ onClick, label, children }) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Collapsible open={collapsed} onClick={() => setCollapsed(!collapsed)}>
            <Collapsible.Content>
                <Collapsible.Label>{label}</Collapsible.Label>

                <Collapsible.ChildWrap>
                    {children}
                </Collapsible.ChildWrap>
            </Collapsible.Content>
        </Collapsible>
    );
};