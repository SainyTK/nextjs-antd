import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

const Box = styled.div`
    width: 100px;
    height: 100px;
    background-color: red;
    text-align: center;
`;

export default () => (
    <Box>
        Hello World
        <Button>Test Test</Button>
    </Box>
);