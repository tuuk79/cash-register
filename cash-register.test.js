let item = require('./item.js');

test('makes sure item exists', () => {
	expect(item).toBeDefined();
});

test('makes sure price of item is > 0', () => {
  expect(item.price).toBeGreaterThan(0);
});

test('should give change if amount tendered is greater than price', () => {
  expect(amountTendered - item.price).toBeGreaterThan(0);
});

test('should not give any change', () => {
  expect(amountTendered - item.price).toBeLessThanOrEqual(0);
});