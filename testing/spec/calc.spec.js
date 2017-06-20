const Calc = require('../calc');

describe('Calculator', () => {

  it('should add 1 and 1 and return 2', () => {
    // arrange
    const calc = new Calc();
    // act
    const result = calc.add(1, 1);
    // assert
    expect(result).toEqual(2);
  });

});