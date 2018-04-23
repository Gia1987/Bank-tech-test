describe('Transaction', function() {
  var transaction

  beforeEach(function(){
    transaction = new Transaction
  });

  describe('#addTransaction', function(){
    it("add transaction to the Account's history", function(){
      transaction.addTransaction('date',1,1);
      transaction.addTransaction('date',2,2);
      expect(transaction.history).toEqual([['date',1,1],['date',2,2]]);
    })
  })
})
