const { Coin, Gumball, GumballVendingMachine } = require('./gumball-vending-machine');

/**
 * This test was written in a way of feature testing where test cases are created
 * to validate the feature requirements, such as test case "should vend only a single
 * gumball at a tyle", or "dispense all remaining changes"
 */
describe('GumballVendingMachine', () => {
  it.todo('returns either red or yellow gumball');
  it.todo('dispenses back if invalid coins are inserted');
  it.todo('should receive only nickel, dime, quarter coins');
  it.todo('should be able to receive multiple coins');
  it.todo('should vend only a single gumball at a time');
  it.todo('dispense all remaining changes');
  it.todo('should return multiple gumballs when the vending lever is hit multiple times');
});

/**
 * Test cases of Coin class using Control Flow Testing
 * Target coverage, such as path, statement, or branch coverages.
 */
describe('Coin - Control Flow Testing', () => {
  it('returns an instance with type = nickle and amountInCents = 5', () => {
    const coin = new Coin('nickel');
    expect(coin).toHaveProperty('type', 'nickel');
    expect(coin).toHaveProperty('amountInCents', 5);
  });
  it('returns an instance with type = dime and amountInCents = 10', () => {
    const coin = new Coin('dime');
    expect(coin).toHaveProperty('type', 'dime');
    expect(coin).toHaveProperty('amountInCents', 10);
  });
  it('returns an instance with type = quarter and amountInCents = 25', () => {
    const coin = new Coin('quarter');
    expect(coin).toHaveProperty('type', 'quarter');
    expect(coin).toHaveProperty('amountInCents', 25);
  });
});

/**
 * Test cases of Coin class using Data Flow Testing
 * GumballVendingMachine.prototype.vendRedGumBall = function vendRedGumBall() {
 *    const redGumball = new Gumball('red'); // (1)
 *    if (this.totalCoinValueFromCustomer < redGumball.valueInCents) { // (2)
 *      return null; // (3)
 *    }
 *    this.totalCoinValueFromCustomer -= redGumball.valueInCents; // (4)
 *    return redGumball; // (5)
 * };
 * All p-uses: (1 - (2, t) - 3), (1 - (2, f), 4, 5)
 */
describe('GumballVendingMachine#vendRedGumBall - Data Flow Testing', () => {
  it('returns null if totalConinValueFromCustomer is less than the redGumball.valueInCents', () => {
    const machine = new GumballVendingMachine();
    machine.totalCoinValueFromCustomer = 3;
    const result = machine.vendRedGumBall();
    expect(result).toBe(null);
  });
  it('returns a red gumball if totalContainValueFromCustomer is equal and greater than the redGumball.valueInCents', () => {
    const machine = new GumballVendingMachine();
    machine.totalCoinValueFromCustomer = 5;
    const result = machine.vendRedGumBall();
    expect(result).not.toBe(null);
    expect(result).toHaveProperty('type', 'red');
    expect(result).toHaveProperty('valueInCents', 5);
  });
});

/**
 * Test cases of Gumball class using Domain Testing
 * Input: type
 * Input Type: String
 * Input Range: Any string
 * Output: Gumball instance with type and valueInCents properties
 */
describe('Gumball - Domain Testing', () => {
  it('returns an instance with type = red and valueInCents = 5 if input type is red', () => {
    const gumball = new Gumball('red');
    expect(gumball).toHaveProperty('type', 'red');
    expect(gumball).toHaveProperty('valueInCents', 5);
  });
  it('returns an instance with type = yellow and valueInCents = 10 if input type is yellow', () => {
    const gumball = new Gumball('yellow');
    expect(gumball).toHaveProperty('type', 'yellow');
    expect(gumball).toHaveProperty('valueInCents', 10);
  });
  it('returns an instance with type = user input and valueInCents = undefined in the input type is neighter red nor yellow', () => {
    const types = ['hello', 'world', 'foo', 'boo'];
    types.forEach((type) => {
      const gumball = new Gumball(type);
      expect(gumball).toHaveProperty('type', type);
      expect(gumball).not.toHaveProperty('valueInCents');
    });
  });
});
