var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;


safari = require('selenium-webdriver/safari'),
    test = require('selenium-webdriver/testing');

test.describe('Login to litecart admin area', function () {
    var driver;

    test.before(function () {


        driver = new webdriver.Builder()

            .forBrowser('safari')
            .build();
        driver.getCapabilities().then(function (caps) {
            console.log(caps);
        });
    });

    test.it('should log to litecart admin area', function () {
        driver.manage().window().maximize();
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