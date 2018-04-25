'use strict';

function Account(transaction = new Transaction(), printer = new Printer()){
  this.balance = 0
  this.transaction = transaction;
  this.printer = printer;
}

Account.prototype.balance = function() {
  return this.balance;
};

Account.prototype.DepositMoney = function(amount) {
  this.balance += amount;
  this.transaction.addTransaction(undefined, amount, this.balance);
};

Account.prototype.withdraw = function(amount) {
  if (this.balance  < amount ){
    throw Error('Sorry not enaugh money');
  }
  this.balance -= amount;
  this.transaction.addTransaction(undefined, -amount, this.balance);
};

Account.prototype.getHistory = function(){
  return this.transaction.history;
}

Account.prototype.statament = function(){
  return this.printer.print(this.transaction.history);
}
