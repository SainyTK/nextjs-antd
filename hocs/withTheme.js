import React from 'react';
import theme from '../config/theme';
import { ThemeProvider } from 'styled-components';

export default ComposedComponent => props => (
    <ThemeProvider theme={theme} >
        <ComposedComponent {...props} />
    </ThemeProvider>
);