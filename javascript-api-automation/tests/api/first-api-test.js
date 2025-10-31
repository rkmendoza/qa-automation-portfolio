import { expect } from 'chai';

describe('Primeros Tests - Verificación de Configuración', () => {
  it('debería sumar números correctamente', () => {
    const result = 2 + 3;
    expect(result).to.equal(5);
  });

  it('debería verificar que true es verdadero', () => {
    expect(true).to.be.true;
  });

  it('debería verificar que un array contiene elementos', () => {
    const fruits = ['apple', 'banana', 'orange'];
    expect(fruits).to.have.lengthOf(3);
    expect(fruits).to.include('banana');
  });
});