const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: true,
      browser: 'chromium',
      smartWait: 10000,
      restart: true,
      waitForAction: 2000,
      waitForTimeout: 5000,
    }
  },
  include: {
    I: './steps_file.js',
    homePage: './homePage.po.js',
  },
  name: 'DemoQA'
}