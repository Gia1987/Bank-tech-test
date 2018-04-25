function TransactionLog(){
  this.history = []

}

TransactionLog.prototype.addTransaction = function(date = new Date(), amount, balance) {
   this.history.push([date, amount, balance]);
};
