const assert = require('assert');

describe('Automation practice home page', function() {
  it('should have the right title', function() {
    browser.url('');
    const title = browser.getTitle();
    assert.strictEqual(title, 'My Store');
  });
});