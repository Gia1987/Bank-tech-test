(function (exports){
  function TransactionLog(){
    this.history = []
  }

  TransactionLog.prototype.time = function() {
      var date = new Date();
      var str =  date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
      return str;
  }

  TransactionLog.prototype.addTransaction = function(amount, balance) {
     var date = this.time()
     this.history.push([date, amount, balance]);
  };
  
  exports.TransactionLog = TransactionLog;
  })(this);
