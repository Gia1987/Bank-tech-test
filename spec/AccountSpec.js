describe('Account', function(){
  var account;

  beforeEach(function(){
    printer = {
      print: function(value) {
        return "Date || Credit/Debit || Balance \n 01/01/2001 || 10 || 20\n 01/01/2000 || 10 || 10\n ";}
      };
    transaction = {
      addTransaction: function(amount, balance){
      },
      history: [['01/01/2000',10,10],['01/01/2001',10,20]]
    };
    account = new Account(transaction)
  });

  describe('#Balance', function(){
    it('returns my balance', function(){
      expect(account.getBalance()).toEqual(account.balance);
    });
  });

  describe('#DepositMoney', function(){
    it('User can puts money in', function(){
      account.DepositMoney(1)
      expect(account.getBalance()).toEqual(1);
    });
  });

  describe('#withdrawal', function(){
    it('User can withdraw money ', function(){
      account.balance = 1
      account.withdraw(1)
      expect(account.getBalance()).toEqual(0);
    });

    it('raise an error if you try to withdraw money more than your balance ',function(){
      account.balance = 1
      expect(function(){account.withdraw(2);}).toThrowError('Sorry not enaugh money');
    });
  });

  describe('#getHistory', function(){
    it('returns transactions history', function(){
        account.DepositMoney(10)
        account.DepositMoney(10)
        expect(account.getHistory()).toEqual([['01/01/2000',10,10],['01/01/2001',10,20]])
      });
    })

  describe('#statament', function(){
    it('call print method from Printer class', function(){
      account.DepositMoney(10)
      account.DepositMoney(10)
      expect(account.statament()).toEqual("Date || Credit/Debit || Balance \n 01/01/2001 || 10 || 20\n 01/01/2000 || 10 || 10\n ")
      });
    })
});
