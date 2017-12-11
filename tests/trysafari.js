var webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome'),
    By = webdriver.By,
    until = webdriver.until,
    test = require('selenium-webdriver/testing');

test.describe('Open BBC Page', function () {
    var driver;

    test.before(function () {
        var options = new chrome.Options();
        options.addArguments(["start-fullscreen"]);

        driver = new webdriver.Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();
        driver.getCapabilities().then(function (caps) {
            console.log(caps);
        });
    });

    test.it('should open and close BBC page', function () {
        driver.get('http://www.bbc.co.uk');

    });

    test.after(function () {
        driver.quit();
    });
});