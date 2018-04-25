describe('Printer', function(){
  var printer

  beforeEach(function(){
    printer = new Printer
  });

  describe('#print', function() {
    it('print the statament', function(){
      account = new Account();
      date = new Date()
      var str =  date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
      account.DepositMoney(100);
      expect(printer.print(account.transactionLog.history)).toBe('Date || Credit/Debit || Balance "\n "' + str + ' || ' + 100 + ' || ' + 100 +"\n ");
    })
  });
});
