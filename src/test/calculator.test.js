const Calculator = require('../add');

// 관련있는 여러 테스트 그룹화
describe('Calculator', () => {
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });

  it('init with 0', () => {
    expect(cal.value).toBe(0);
  });

  it('sets', () => {
    cal.set(3);
    expect(cal.value).toBe(3);
  });

  it('clear', () => {
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it('add', () => {
    cal.add(2);
    expect(cal.value).toBe(2);
  });

  it('add should throw an error if value is greater than 100', () => {
    expect(() => {
      cal.add(101);
    }).toThrow('Value can not be greater than 100');
  });

  it('subtract', () => {
    cal.set(5);
    cal.subtract(3);
    expect(cal.value).toBe(2);
  });

  it('multiply', () => {
    cal.set(2);
    cal.multiply(3);
    expect(cal.value).toBe(6);
  });

  describe('divides', () => {
    it('0 / 0 === NaN', () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });

    it('1 / 0 === Infinity', () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });

    it('4 / 4 === 1', () => {
      cal.set(4);
      cal.divide(4);
      expect(cal.value).toBe(1);
    });
  });
});
