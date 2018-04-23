'use strict';

function Bank(){
  this.balance = 0

}

Bank.prototype.balance = function() {
  return this.balance;
};

Bank.prototype.DepositMoney = function(ammount) {
  this.balance += ammount;
};

Bank.prototype.withdraw = function(ammount) {
  this.balance -= ammount;
};
