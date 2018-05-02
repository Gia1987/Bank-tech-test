(function (exports){
  function DateFormat(date = new Date()){
    this.date = date
  }

  DateFormat.prototype.time = function() {
      var str =  date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
      return str;

  }

  exports.DateFormat = DateFormat;
  })(this);
