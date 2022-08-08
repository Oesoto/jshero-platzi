const { filterOrders } = require('./exercise5');

describe('Given an array of orders', () => {
  describe('When filters for quantity and delivered are specified', () => {
    test('Then it should return the filtered orders', () => {
      const orders = [
        {
          customerName: 'Nicolas',
          total: 100,
          delivered: true,
        },
        {
          customerName: 'Zulema',
          total: 120,
          delivered: false,
        },
      ];
      const filteredOrders = filterOrders(orders, {
        total: 100,
        delivered: true,
      });
      expect(filteredOrders).toEqual([
        {
          customerName: 'Nicolas',
          total: 100,
          delivered: true,
        },
      ]);
    });
  });
});
