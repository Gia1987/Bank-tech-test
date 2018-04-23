describe('Bank', function(){
  var bank;



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

  describe('#withdrawal', function(){
    it('User can withdraw money ', function(){
      bank.balance = 1
      bank.withdraw(1)
      expect(bank.balance).toEqual(0);
    });

    it('raise an error if you try to withdraw money more than your balance ',function(){
      bank.balance = 1
      expect(function(){bank.withdraw(2);}).toThrowError('Sorry not enaugh money');
    });
  });

  describe('#getHistory', function(){
    it('shows transations', function(){
      date = Date.now()
      bank.DepositMoney(100)
      expect(bank.getHistory()).toEqual([[date,100,100]])
    })
  })

});
