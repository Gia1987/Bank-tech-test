(function (exports){
  function DateFormat(date = new Date()){
    this.date = date
  }

  DateFormat.prototype.time = function() {
      var str =  this.date.getDate() + "/" + (this.date.getMonth() + 1) + "/" + this.date.getFullYear();
      return str;

  }

  exports.DateFormat = DateFormat;
  })(this);
