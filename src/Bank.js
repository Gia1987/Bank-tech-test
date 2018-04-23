'use strict';

function Bank(transaction = new Transaction){
  this.balance = 0
  this.transaction = transaction;
}

Bank.prototype.balance = function() {
  return this.balance;
};

Bank.prototype.DepositMoney = function(amount) {
  this.balance += amount;
  this.transaction.addTransaction(undefined, amount, this.balance);
};

Bank.prototype.withdraw = function(amount) {
  if (this.balance - amount < 0 ){
  throw Error('Sorry not enaugh money');
  }
  this.balance -= amount;
  this.transaction.addTransaction(undefined, -amount, this.balance);
};
