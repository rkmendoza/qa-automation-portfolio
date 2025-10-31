import { expect } from 'chai';

describe('Operaciones Matemáticas', () => {
  it('debería multiplicar correctamente', () => {
    expect(5 * 4).to.equal(20);
  });

  it('debería dividir correctamente', () => {
    expect(15 / 3).to.equal(5);
  });

  it('debería manejar decimales', () => {
    expect(0.1 + 0.2).to.be.closeTo(0.3, 0.001);
  });
});