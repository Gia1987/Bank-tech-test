(function (exports){
  function TransactionLog(date = new DateFormat){
    this.history = []
    this.date = date;
  }

  TransactionLog.prototype.addTransaction = function(amount, balance) {
     var time = this.date.time()
     this.history.push([time, amount, balance]);
  };

  exports.TransactionLog = TransactionLog;
  })(this);
