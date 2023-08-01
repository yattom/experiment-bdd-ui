require('chromedriver');
const Chrome = require('selenium-webdriver/chrome');
const { webdriver, Builder, By } = require('selenium-webdriver');
const assert = require('assert');
const { BeforeAll,
    When,
    Then,
    AfterAll,
} = require('@cucumber/cucumber');

const ctx = {};
BeforeAll(() => {
  const options = new Chrome.Options();
  ctx.driver = new Builder().
                   forBrowser('chrome').
                   setChromeOptions(options.headless()).
                   build();
});

AfterAll(async () => {
    await ctx.driver.quit();
});
When('the page shows', async () => {
  await ctx.driver.get('http://localhost:5173');
});

Then('I should see {string}', async (expected) => {
  const text = await ctx.driver.findElement(By.tagName('body')).getText();
  assert(text.includes(expected));
});
