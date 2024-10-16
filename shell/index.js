const cfg = {
    url:"https://select2.org",
    max_wait_time:10000,
}



const { Builder, By, until } = require('selenium-webdriver');
const assert = require("assert");
const { setTimeout } = require('timers');

async function sleep(t){
    return new Promise(resolve => setTimeout(resolve, t))
}

/**
 * https://bluegoat.jp/blog/nodejs-selenium/
 * https://qiita.com/tonio0720/items/70c13ad304154d95e4bc
 * https://techblog.istyle.co.jp/archives/5280
 * https://zenn.dev/yu_no/articles/a73a21522b1d41#%E7%89%B9%E5%AE%9A%E3%81%AE%E5%B1%9E%E6%80%A7%E3%81%8C%E5%AD%98%E5%9C%A8%E3%81%99%E3%82%8B%E3%83%8E%E3%83%BC%E3%83%89%E3%82%92%E9%81%B8%E6%8A%9E
 * 
 * 
 * 
 * 
 */

(async function() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get( cfg.url );
    await sleep(3000)
    console.log("!")

    // let link = await driver.findElements(By.xpath('//*[@href="/getting-started/basic-usage"]'))
    let link = await driver.wait(until.elementLocated(By.xpath('//*[@href="/getting-started/basic-usage"]')), cfg.max_wait_time);
    await link.click();
    console.log("!!")
    await sleep(5000);
    // let select = await driver.wait(until.elementLocated('/html/body/section/div[2]/div[2]/div[1]/span'), cfg.max_wait_time);
    // await select.click();
    // s2-example
    
    let select = await driver.wait(until.elementLocated(By.xpath('//*[@class="s2-example"]/span')), cfg.max_wait_time);
    await select.click();
    // 
    console.log("!!!")
    // await driver.findElements(By.xpath('//*[@href="/getting-started/basic-usage"]')).click();

    // const button = await driver.wait(until.elementLocated(By.className('class')), 5000);
    // await button.click();
    // //*[@id="foo"]
    // <a href="/getting-started/basic-usage">

})();























































