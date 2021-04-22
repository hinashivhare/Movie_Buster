const { Builder, By, Key } = require('selenium-webdriver');

const testSomething = async () => {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000');
    const searchInput = driver.findElement(By.id('search_input'));
    searchInput.sendKeys('superman', Key.ENTER);
    const searchBtn = driver.findElement(By.id('search_button'));
    (await searchBtn).click();
}

testSomething();