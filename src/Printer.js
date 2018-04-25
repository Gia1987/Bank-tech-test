(function (exports){
  function Printer(){

  }

  Printer.prototype.header = function(){
    return 'Date || Credit/Debit || Balance "\n "'
  }

  Printer.prototype.print = function(history){
    var statement = ""
    history.reverse().forEach(function(row){
      statement += row[0] + " || " + row[1] + " || " + row[2] + "\n "
    })

    return this.header() + statement
  }

exports.Printer = Printer;
})(this);
