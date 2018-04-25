function Printer(){

}


Printer.prototype.header = function(){
  return 'date || credit || debit || balance\n';
}

Printer.prototype.print = function(history){
  statement = ""
  history.forEach(function(row){
      statement += 'Date: '+ row[0] + " || " + 'Credit/Debit: ' + row[1] + " || " + 'Balance: ' + row[2] + "\n"
  })

  return statement
}
