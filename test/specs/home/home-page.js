const assert = require('assert');
const helper = require('../../../utils/helper')
const data = require('../../../resources/home/home')

describe('Automation practice home page', function() {
  it('should have the right title', function() {
    browser.url('')

    assert.strictEqual(helper.getBrowserTitle(), data.store_name)
  });
});