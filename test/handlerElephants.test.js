const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verificando se HandlerElephants é de fato uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('Verificando se o parametro da função é uma string', () => {
    expect(handlerElephants(15)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Verificando se há um elefante chamado Orval', () => {
    expect(handlerElephants('names')).toContain('Orval');
  });
  it('Verificando se há quatro elefantes', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('Verificando se a média de idade está correta', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
});
