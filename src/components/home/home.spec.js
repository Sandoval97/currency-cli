import React from 'react';
import renderer from 'react-test-renderer';

import theme from '../../theme/theme';
import { ThemeProvider } from '@material-ui/styles';
import Home  from './index';

describe('Pruebas del componente Home', () => {
  test('Integridad del componente', () => {
    const component = renderer.create(<ThemeProvider theme={theme}><Home /></ThemeProvider>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});