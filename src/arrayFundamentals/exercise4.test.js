const { filterByWordSize } = require('./exercise4');

describe('Given an array of words', () => {
  describe('When a minimum word size is specified', () => {
    test('It should return an array of the words that have the minimum specified word size', () => {
      const words = ['amor', 'sol', 'piedra', 'día'];
      expect(filterByWordSize(words, 4)).toEqual(['amor', 'piedra']);
    });
  });
});
