describe('Bank', function(){
  var bank


  beforeEach(function(){
    bank = new Bank
  });

  describe('returns the balance', function(){
    it('returns my balance', function(){
      expect(bank.balance()).toEqual(0)
    })
  })

});
