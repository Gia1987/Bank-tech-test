'use strict';

function Bank(){
  this.balance = 0
  this._minimumBalance = 0
}

Bank.prototype.balance = function() {
  return this.balance;
};

Bank.prototype.DepositMoney = function(ammount) {
  this.balance += ammount;
};

Bank.prototype.withdraw = function(ammount) {
  if (this.balance - ammount < this._minimumBalance ){
  throw Error('Sorry not enaugh money');
  }
  this.balance -= ammount;
};
