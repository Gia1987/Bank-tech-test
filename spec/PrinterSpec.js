describe('Printer', function(){
  var printer

  beforeEach(function(){
    printer = new Printer

  });

  describe('#print', function() {
    it('print the statament', function(){
      account = new Account();
      date = new Date()
      account.DepositMoney(date, 100);
      expect(printer.print(account.transactionLog.history)).toContain(date, 100, 100);
    })
  });
});
