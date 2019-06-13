let item = require('./item.js');
let amountTendered = item.tendered;

let cashRegister = require('./service/cashReister');

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
  item.price = 2;
  expect(amountTendered - item.price).toBeLessThanOrEqual(0);

});

describe('the basic featurs of a register', () => {
  test('Cash Register Exist', () => {
    expect(cashRegister).toBeDefined();
  })

  test('Register to be a Cash Register', () => {
    expect(typeof cashRegister).toBe(CashRegister);
  })

  test('Register to have a drawer', () => {
    expect(cashRegister.drawer).toBeDefined();
  })

  test('Register to start day empty', () => {
    expect(cashRegister.drawer.total).toBe(0);
  })

  test('Cash Register can never be less than zero', () => {
    expect(cashRegister.drawer.total).not.toBeLessThan(0);
  })

  test('Cash Register can only hold currency values', () => {
    stuff = ['dog', 'cat', 'house', '1.99', '23##', '👕', '🍺', '🏒', '2r.22', '1', '.05'];
    currency = ['1', '.02', '.2', '100.22'];
    var randomItem = stuff[Math.floor(Math.random() * stuff.length)];
    var randomCurrency = currency[Math.floor(Math.random() * currency.length)];

    expect(cashRegister.drawer.contains(randomItem)).toBeFalsy();
    expect(cashRegister.drawer.contains(randomCurrency)).toBeTruthy();
  })
}) 