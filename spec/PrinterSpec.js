describe('Printer', function(){
  var printer

  beforeEach(function(){
    printer = new Printer
  });

  describe('#print', function() {
    it('print the statament', function(){
      var history = [["01/01/2000", 10,10],["01,01,2001", 20, 30]]
      var string = "Date || Credit/Debit || Balance \n 01,01,2001 || 20 || 30\n 01/01/2000 || 10 || 10\n "
      expect(printer.print(history)).toBe(string);
    })
  });
});
