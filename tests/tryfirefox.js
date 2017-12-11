var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

firefox = require('selenium-webdriver/firefox'),
    test = require('selenium-webdriver/testing');

test.describe('Login to litecart admin area', function () {
    var driver;

    test.before(function () {
        var options = new firefox.Options();
        options.addArguments(["start-fullscreen"]);

        driver = new webdriver.Builder()
            .withCapabilities({
                'marionette': true
            })
            .forBrowser('firefox')
            .build();
        driver.getCapabilities().then(function (caps) {
            console.log(caps);
        });
    });

    test.it('should log to litecart admin area', function () {
        driver.get('http://localhost/litecart/admin');
        driver.manage().timeouts().implicitlyWait(20);
        driver.findElement(By.name("username")).sendKeys("admin");
        driver.findElement(By.name("password")).sendKeys("admin");
        driver.manage().timeouts().implicitlyWait(10);


    });

    test.after(function () {
        driver.quit();
    });
});