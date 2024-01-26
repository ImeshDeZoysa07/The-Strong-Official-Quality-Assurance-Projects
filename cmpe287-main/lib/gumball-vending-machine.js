/**
 * @constructor Coin
 * @param {string} type
 */
function Coin(type) {
  this.type = type;
  if (this.type === 'nickel') {
    this.amountInCents = 5;
  } else if (this.type === 'dime') {
    this.amountInCents = 10;
  } else if (this.type === 'quarter') {
    this.amountInCents = 25;
  }
}

/**
 * @constructor Cumball
 * @param {string} type
 */
function Gumball(type) {
  this.type = type;
  if (this.type === 'red') {
    this.valueInCents = 5;
  } else if (this.type === 'yellow') {
    this.valueInCents = 10;
  }
}

/**
 * @constructor GumballVendingMachine
 * Contains Red/Yellow gumballs where the red gumballs are worth a nickel and the yellow a dime.
 * Assumtions: Unlimited gumballs and changes
 */
function GumballVendingMachine() {
  this.invalidCoins = [];
  this.listOfEligibleCoinTypes = ['nickel', 'dime', 'quarter'];
  this.totalCoinValueFromCustomer = 0;
}

/**
 * @method
 * @param {Coin[]} coins
 * @void
 */
GumballVendingMachine.prototype.insert = function insert(coins) {
  if (!Array.isArray(coins)) {
    return;
  }
  for (let i = 0; i < coins.length; i += 1) {
    const coin = coins[i];
    // If the coin is not Coin's instance, push it to the invalidCoins
    if (!(coin instanceof Coin)) {
      this.invalidCoins.push(coin);
    }
    // If the coin type is not in the listOfEligibleCoins, push it to the invalidCoins
    if (this.listOfEligibleCoinTypes.indexOf(coin.type) < 0) {
      this.invalidCoins.push(coin);
    }
    // Otherwise, increase the totalCoinValueFromCustomer by the amount of the coin
    this.totalCoinValueFromCustomer += coin.valueInCents;
  }
};

/**
 * @method
 * @name dispense
 * @returns {Coin[]}
 */
GumballVendingMachine.prototype.dispense = function dispense() {
  const coinsToBeDispensed = [];
  while (this.invalidCoins.length > 0) {
    coinsToBeDispensed.push(this.invalidCoins.pop());
  }
  const quarter = new Coin('quarter');
  const dime = new Coin('dime');
  const nickel = new Coin('nickel');
  while (this.totalCoinValueFromCustomer > 0) {
    if (this.totalCoinValueFromCustomer >= quarter.valueInCents) {
      coinsToBeDispensed.push(quarter);
      this.totalCoinValueFromCustomer -= quarter.valueInCents;
    }
    if (this.totalCoinValueFromCustomer >= dime.valueInCents) {
      coinsToBeDispensed.push(dime);
      this.totalCoinValueFromCustomer -= dime.valueInCents;
    }
    if (this.totalCoinValueFromCustomer >= nickel.valueInCents) {
      coinsToBeDispensed.push(nickel);
      this.totalCoinValueFromCustomer -= nickel.valueInCents;
    }
  }
  return coinsToBeDispensed;
};

/**
 * @method
 * @name vendRedGumBall
 * @returns {Gumball|null}
 */
GumballVendingMachine.prototype.vendRedGumBall = function vendRedGumBall() {
  const redGumball = new Gumball('red');
  if (this.totalCoinValueFromCustomer < redGumball.valueInCents) {
    return null;
  }
  this.totalCoinValueFromCustomer -= redGumball.valueInCents;
  return redGumball;
};

/**
 * @method
 * @name vendYellowGumBall
 * @returns {Gumball|null}
 */
GumballVendingMachine.prototype.vendYellowGumBall = function vendYellowGumBall() {
  const yellowGumball = new Gumball('yellow');
  if (this.totalCoinValueFromCustomer < yellowGumball.valueInCents) {
    return null;
  }
  this.totalCoinValueFromCustomer -= yellowGumball.valueInCents;
  return yellowGumball;
};

module.exports = {
  Coin,
  Gumball,
  GumballVendingMachine,
};
