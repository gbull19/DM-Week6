const {Builder, Capabilities, By} = require('selenium-webdriver');

require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
    await driver.get('http://localhost:5500/Week_06/day_02/lab/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('I can search Movies', async () => {

    await driver.findElement(By.xpath("//input[@placeholder='Add Movie']")).sendKeys("LeBron Sucks\n")
    await driver.sleep(2000)

    await driver.findElement(By.xpath("//input[@placeholder='Add Movie']")).sendKeys("Kobe Is GOAT\n")
    await driver.sleep(2000)

    await driver.findElement(By.xpath("//span[contains(text(), 'Kobe')]")).click()
    await driver.sleep(2000)

    await driver.findElement(By.xpath("//span[contains(text(), 'Kobe')]")).click()
    await driver.sleep(2000)

    await driver.findElement(By.xpath("//*[@id='KobeIsGOAT']")).click()
    await driver.sleep(2000)
})