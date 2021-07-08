import puppeteer from 'puppeteer';

describe('e2e app tests', () => {
  it('screen', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('http://localhost:3000/posts/list');
    console.log(await page.content());
    await page.screenshot({ path: 'screenshot.png' });

    await browser.close();
  }, 7000);
});
