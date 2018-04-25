describe('TransactionLog', function() {
  var transactionLog

  beforeEach(function(){
    transactionLog = new TransactionLog
    date = new Date()
  });

  describe('#time', function(){
    it('returns the date', function(){
      str =  date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
      expect(transactionLog.time()).toBe(str)
    })
  })

  describe('#addTransaction', function(){
    it("add transaction to the Account's history", function(){
      str =  date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
      transactionLog.addTransaction(100,100);
      transactionLog.addTransaction(200,200);
      expect(transactionLog.history).toEqual([[str,100,100],[str,200,200]]);
    })
  })
})
