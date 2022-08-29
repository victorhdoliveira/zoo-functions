const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verificando se getOpeningHours é de fato uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  it('Verificando o output quando não há argumento para a função', () => {
    const agenda = getOpeningHours();
    expect(agenda).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Verificando se o Zoo está aberto ou fechado às 9h de Segunda', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Verificando se o Zoo está aberto ou fechado às 9h de Terça', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Verificando se o Zoo está aberto ou fechado às 9h de Quarta', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('Inserindo o input com um dia inválido', () => {
    expect(() => getOpeningHours('Segunda', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });
  it('Inserindo o input com um turno inválido', () => {
    expect(() => getOpeningHours('Sunday', '09:00-AX')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Inserindo o input com um horário inválido', () => {
    expect(() => getOpeningHours('Friday', 'X9:00-AM')).toThrow('The hour should represent a number');
  });
  it('Inserindo o input com os minutos inválidos', () => {
    expect(() => getOpeningHours('Saturday', '10:QW-AM')).toThrow('The minutes should represent a number');
  });
  it('Inserindo o input com a hora contendo um número maior que 12', () => {
    expect(() => getOpeningHours('Saturday', '15:30-AM')).toThrow('The hour must be between 0 and 12');
  });
  it('Inserindo o input com os minutos contendo um número maior que 59', () => {
    expect(() => getOpeningHours('Saturday', '10:90-AM')).toThrow('The minutes must be between 0 and 59');
  });
});
