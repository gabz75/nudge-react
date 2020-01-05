import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render as renderTestingLibraryReact } from '@testing-library/react';

import theme from 'theme';

export const render = (Component) => (
  renderTestingLibraryReact(<ThemeProvider theme={theme}>{Component}</ThemeProvider>)
);

export default { render };
