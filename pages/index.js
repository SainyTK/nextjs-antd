import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';
import { palette } from 'styled-theme';
import withTheme from '../hocs/withTheme';

const Box = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${palette('primary',0)};
    text-align: center;
`;

export default withTheme(() => (
    <Box>
        Hello World
        <Button>Test Test</Button>
    </Box>
));