
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button displays choices', async () => {
    const draw = await driver.findElement(By.id('draw'))
    driver.executeScript("arguments[0].click();", draw);

    const displayed = await driver.findElement(By.id('results')).isDisplayed();

    expect(displayed).toBe(true);
})

test('Add to duo ', async () => {
    const draw = await driver.findElement(By.id('draw'))
    driver.executeScript("arguments[0].click();", draw);

    const add = await driver.findElement(By.className('bot-btn'))
    driver.executeScript("arguments[0].click();", add);

    const selected = await driver.findElement(By.linkText('Remove from Duo'));

    expect().toBe(!null);
})
