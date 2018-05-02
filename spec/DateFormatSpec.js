describe('DateFormat', function() {
  var dateformat

  beforeEach(function(){
    date = {
      getDate: function() {
        return 01;
      },
      getMonth: function() {
        return 02;
      },
      getFullYear: function() {
        return 2000;}
      };
      dateformat = new DateFormat(date)
  });

  describe('#time', function(){
    it('returns the date', function(){
      str =  date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
      expect(dateformat.time()).toEqual(str)
    })
  })
});
