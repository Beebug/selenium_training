var webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome'),
    By = webdriver.By,
    until = webdriver.until,
    test = require('selenium-webdriver/testing');

test.describe('Login to litecart admin area', function () {
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

    test.it('should log to litecart admin area', function () {
        driver.get('http://localhost/litecart/admin');
        driver.manage().timeouts().implicitlyWait(10);
        driver.findElement(By.name("username")).sendKeys("admin");
        driver.findElement(By.name("password")).sendKeys("admin");


    });

    test.after(function () {
        driver.quit();
    });
});