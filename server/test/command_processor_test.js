var assert = require('assert');
var sm = require('../command_processor');

describe('Command Processor', function () {
  describe('#getResponse()', function () {
    it('should return "Howdy" when "hello" is passed in', function () {

      resp = sm.getResponse('hello');

      assert.equal(resp.self, 'Howdy');
    });

    it('should return description of container containing the object issuing the "look" command', function () {
      const container = new sm.MyObject('A container description');
      const actor = new sm.MyObject();

      actor.container = container;

      resp = sm.getResponse('look', actor);

      assert.equal(resp.self, actor.container.description);
    });

    it('Should return "You Dance" for the self message when issuing the "dance" command', function () {
      const container = new sm.MyObject('A container description');
      const actor = new sm.MyObject();

      actor.container = container;

      resp = sm.getResponse('dance', actor);

      assert.equal(resp.self, 'You dance');
    });

    it('Should return "<actor.description> dances" for the other message when issuing the "dance" command', function () {
      const container = new sm.MyObject('A container description');
      const actor = new sm.MyObject('a normal looking actor');

      actor.container = container;

      resp = sm.getResponse('dance', actor);

      assert.equal(resp.others, `${actor.description} dances`);
    });
  });
});
