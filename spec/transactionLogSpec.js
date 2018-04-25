describe('TransactionLog', function() {
  var transactionLog

  beforeEach(function(){
    transactionLog = new TransactionLog
  });

  describe('#addTransaction', function(){
    it("add transaction to the Account's history", function(){
      transactionLog.addTransaction('date',1,1);
      transactionLog.addTransaction('date',2,2);
      expect(transactionLog.history).toEqual([['date',1,1],['date',2,2]]);
    })
  })
})
