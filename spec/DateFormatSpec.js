describe('DateFormat', function() {
  var dateformat

  beforeEach(function(){
    date = {
      getDate: function() {
        return 2;
      },
      getMonth: function() {
        return 2;
      },
      getFullYear: function() {
        return 2000;}
      };
      dateformat = new DateFormat(date)
  });

  describe('#time', function(){
    it('returns the date', function(){
      str = "2/3/2000"
      // str =  date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
      expect(dateformat.time()).toEqual(str)
    })
  })
});
