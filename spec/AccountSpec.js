describe('Account', function(){
  var account;

  beforeEach(function(){
    account = new Account
  });

  describe('#Balance', function(){
    it('returns my balance', function(){
      expect(account.balance).toEqual(account.balance);
    });
  });

  describe('#DepositMoney', function(){
    it('User can puts money in', function(){
      account.DepositMoney(1)
      expect(account.balance).toEqual(1);
    });
  });

  describe('#withdrawal', function(){
    it('User can withdraw money ', function(){
      account.balance = 1
      account.withdraw(1)
      expect(account.balance).toEqual(0);
    });

    it('raise an error if you try to withdraw money more than your balance ',function(){
      account.balance = 1
      expect(function(){account.withdraw(2);}).toThrowError('Sorry not enaugh money');
    });
  });

  describe('#getHistory', function(){
    it('shows transations', function(){
      date = new Date();
      var str =  date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
      account.DepositMoney(100)
      expect(account.getHistory()).toEqual([[str, 100, 100]])
    })
  })

});
