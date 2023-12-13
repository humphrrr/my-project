var assert = require('assert');
var sm = require('../command_processor');

describe('Regression Tests', function () {
  describe('Issuing commands', function () {

    it('should return description of container containing the object issuing the "look" command', function () {
      const container = new sm.MyObject('A container description');
      const actor = new sm.MyObject();

      actor.container = container;

      resp = sm.getResponse('look', actor);

      assert.equal(resp.self, actor.container.description);
    });

    it('should show the object issuing the dance command the proper first person message', function () {
      const container = new sm.MyObject('A container description');
      const actor = new sm.MyObject();

      actor.container = container;

      resp = sm.getResponse('dance', actor);

      assert.equal(resp.self, 'You dance');
    });

    it('should show the object issuing the dance command the proper first person message', function () {
      const container = new sm.MyObject('A container description');
      const actor = new sm.MyObject();

      actor.container = container;

      resp = sm.getResponse('dance', actor);

      assert.equal(resp.self, 'You dance');
    });
  });
});
