import settings from './settings';

describe('Parametros correctos en configuracion general', () => {
  test('Comprobar existencia de monedas', () => {
    expect(['eur','usd']).toEqual(expect.arrayContaining(settings.prefixs));
  });
  test('Comprobar integridad de clave', () => {
    expect('ccfc2b9818msh37990253e6a8f70p143620jsnd713ff641e81').toBe(
        settings.key
    );
  });
});