describe('Bank', function(){
  var bank


  beforeEach(function(){
    bank = new Bank
  });

  describe('#Balance', function(){
    it('returns my balance', function(){
      expect(bank.balance).toEqual(bank.balance);
    });
  });

  describe('#DepositMoney', function(){
    it('User can puts money in', function(){
      bank.DepositMoney(1)
      expect(bank.balance).toEqual(1);
    });
  });

});
