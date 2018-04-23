function Transaction(){
  this.history = []

}

Transaction.prototype.addTransaction = function(date = Date.now(), ammount, balance) {
   var transactions = []
   transactions.push(date, ammount, balance)
   this.history.push(transaction);
};
