const express = require('express');
const puppeteer = require('puppeteer'); // or 'puppeteer' if using the full package
const fs = require('fs');
const app = express();
require('dotenv').config();

app.get('/scrape', async (req, res) => {

  try {
    const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });




    const page = await browser.newPage();

    // Use a real user-agent to avoid bot detection
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/115 Safari/537.36');

    // Navigate to your desired Trip.com flight search URL
    const url = 'https://www.trip.com/flights/singapore-to-chennai/tickets-sin-maa?dcity=SIN&acity=MAA&ddate=2024-08-15&rdate=2024-08-22&class=y&traveltype=1&quantity=1';
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });

    // Wait for the correct selector
    await page.waitForSelector('span[data-price]', { timeout: 45000 });

    // Extract the price
    const price = await page.$eval('span[data-price]', el => el.getAttribute('data-price'));

    await browser.close();

    console.log('✅ Found price: SGD', price);
    res.send({ price: `SGD ${price}` });
   
  } catch (error) {
    console.error('❌ Scraping failed:', error.message);
    res.status(500).send('Scraping failed: ' + error.message);
  }
});


app.listen(3000, () => {
  console.log('✈️ Flight scraper listening on http://localhost:3000/scrape');
});
