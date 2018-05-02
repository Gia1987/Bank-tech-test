describe('TransactionLog', function() {
  var transactionLog

  beforeEach(function(){
    dataformater = {
      time: function() {
      return '01/01/2001';}
      };
    transactionLog = new TransactionLog(dataformater)
  });

  describe('#addTransaction', function(){
    it("add transaction to the Account's history", function(){
      transactionLog.addTransaction(100,100);
      transactionLog.addTransaction(200,300);
      expect(transactionLog.history).toEqual([['01/01/2001',100,100],['01/01/2001',200,300]]);
    })
  })
})
