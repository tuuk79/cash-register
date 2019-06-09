let item = require('./item.js');

test('makes sure item exists', () => {
	expect(item).toBeDefined();
});

test('makes sure price of item is > 0', () => {
  expect(item.price).toBeGreaterThan(0);
});