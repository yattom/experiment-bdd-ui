const assert = require('assert')
const { When, Then } = require('@cucumber/cucumber')

When('the page shows', () => {

});

Then('I should see {string}', (expected) => {
  assert.equal('', expected);
});
