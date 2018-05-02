(function (exports){
  function DateFormat(date = new Date()){
    this.dateTransaction =  date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
  }

  DateFormat.prototype.time = function() {
      return this.dateTransaction;
  }

  exports.DateFormat = DateFormat;
  })(this);
