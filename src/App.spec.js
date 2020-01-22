import React from 'react';
import { render } from '@testing-library/react';

import theme from './theme/theme';
import { ThemeProvider } from '@material-ui/styles';
import App from './App';

test('Prueba de saludo inicial', () => {
  const { getByText } = render(<ThemeProvider theme={theme}><App /></ThemeProvider>);
  const text = getByText(/Bienvenido!/i);
  expect(text).toBeInTheDocument();
});
