var assert = require('assert');
var sm = require('../server_module');

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(sm.getResponse('hello'), 'Howdy');
    });
  });
});
