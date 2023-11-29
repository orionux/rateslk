import axios from 'axios';
import cheerio from 'cheerio';
import type { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     try {
//         const response = await axios.get('https://www.cbsl.gov.lk/cbsl_custom/charts/usd/indexsmall.php');
//         const exchangeRates = parseExchangeRates(response.data);
//         res.status(200).json(exchangeRates);
//     } catch (error) {
//         res.status(500).json({ error: error });
//     }
// }

// function parseExchangeRates(html: string) {
//     const $ = cheerio.load(html);

//     const buyElement = $('p:contains("Buy")');
//     const sellElement = $('p:contains("Sell")');

//     const buyingRate = parseFloat(buyElement.text().trim().split(/\s+/).pop() || '0');
//     const sellingRate = parseFloat(sellElement.text().trim().split(/\s+/).pop() || '0');

//     console.log('Buy Value:', buyingRate);
//     console.log('Sell Value:', sellingRate);

//     return {
//         buyingRate,
//         sellingRate,
//     };
// }


const scrapeExchangeRates = async (url: string) => {
    try {
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);
      const buyElement = $('p:contains("Buy")');
      const sellElement = $('p:contains("Sell")');
      const buyValue = parseFloat(buyElement.text().trim().split(/\s+/).pop() || '0');
      const sellValue = parseFloat(sellElement.text().trim().split(/\s+/).pop() || '0');
      return { buyValue, sellValue };
    } catch (error) {
      console.error(`Error scraping data from ${url}:`, error);
      return { buyValue: 0, sellValue: 0 };
    }
  };

  export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
      const usdRates = await scrapeExchangeRates('https://www.cbsl.gov.lk/cbsl_custom/charts/usd/indexsmall.php');
      const gbpRates = await scrapeExchangeRates('https://www.cbsl.gov.lk/cbsl_custom/charts/gbp/indexsmall.php');
      const eurRates = await scrapeExchangeRates('https://www.cbsl.gov.lk/cbsl_custom/charts/eur/indexsmall.php');
      const jpyRates = await scrapeExchangeRates('https://www.cbsl.gov.lk/cbsl_custom/charts/jpy/indexsmall.php');
      const cnhRates = await scrapeExchangeRates('https://www.cbsl.gov.lk/cbsl_custom/charts/cnh/indexsmall.php');
      const audRates = await scrapeExchangeRates('https://www.cbsl.gov.lk/cbsl_custom/charts/aud/indexsmall.php');
      
  
      res.status(200).json({
        usd: usdRates,
        gbp: gbpRates,
        eur: eurRates,
        jpy: jpyRates,
        cnh: cnhRates,
        aud: audRates
      });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }