function Transaction(){
  this.history = []

}

Transaction.prototype.addTransaction = function(date = Date.now(), amount, balance) {
   this.history.push([date, amount, balance]);
};
