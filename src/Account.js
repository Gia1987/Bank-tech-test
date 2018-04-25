'use strict';
(function (exports){
  function Account(transactionLog = new TransactionLog(), printer = new Printer()){
    this.balance = 0
    this.transactionLog = transactionLog;
    this.printer = printer;
  }

  Account.prototype.balance = function() {
    return this.balance;
  };

  Account.prototype.DepositMoney = function(amount) {
    this.balance += amount;
    this.transactionLog.addTransaction(amount, this.balance);
  };

  Account.prototype.withdraw = function(amount) {
    if (this.balance  < amount ){
      throw Error('Sorry not enaugh money');
    }
    this.balance -= amount;
    this.transactionLog.addTransaction(-amount, this.balance);
  };

  Account.prototype.getHistory = function(){
    return this.transactionLog.history;
  }

  Account.prototype.statament = function(){
    return this.printer.print(this.transactionLog.history);
  }
exports.Account = Account;
})(this);
