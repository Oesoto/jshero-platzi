const { calculateTax } = require('./exercise3');

describe('Given an array of products', () => {
  describe('When taxes are calculated', () => {
    test('Then it should return an array of products with the tax value', () => {
      const products = [
        {
          name: 'Product 1',
          price: 1000,
          stock: 10,
        },
        {
          name: 'Product 2',
          price: 2000,
          stock: 20,
        },
      ];

      const productsWithTax = calculateTax(products, 0.19);

      expect(productsWithTax[0].taxes).toEqual(190);
      expect(productsWithTax[1].taxes).toEqual(380);
    });
  });
});
