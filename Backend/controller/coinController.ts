import axios, { AxiosError } from 'axios';
import { Request, Response } from 'express';

async function getethuniv3(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=1&dexer-id=1348&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });

    const data = response.data;

    res.json(data);
  } catch (error) {
    
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getethuniswap(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=1&dexer-id=1069&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
          'X-CMC_PRO_API_KEY': '54b0842c-1cc7-4a72-8850-62bc3be8c488',
        },
      });

    const data = response.data;
    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


async function getethsushi(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=1&dexer-id=6746&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getethpan(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=1&dexer-id=6707&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getethshibaswap(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=1&dexer-id=1408&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getethdefiswap(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=1&dexer-id=1688&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


async function getethkyberswap(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=1&dexer-id=2796&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getethfraxswap(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=1&dexer-id=2796&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getethswaper(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=1&dexer-id=1383&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getethradio(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=1&dexer-id=1649&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function bnbpan(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=14&dexer-id=1344&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function bnbpanv3(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=14&dexer-id=6706&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


async function bnbape(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=14&dexer-id=1281&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function bnbbiswap(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=14&dexer-id=1445&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function bnbmedx(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=14&dexer-id=1329&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function bnbbaby(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=14&dexer-id=1395&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function bnbfst(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=14&dexer-id=1685&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function bnbkyber(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=14&dexer-id=1480&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function bnbnomi(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=14&dexer-id=1657&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function bnbknight(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=14&dexer-id=1584&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function bnbcone(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=14&dexer-id=1623&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function bnbbakery(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=14&dexer-id=1302&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function bnbw3(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=14&dexer-id=1739&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function bnbbaryon(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=14&dexer-id=1698&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function arbimain(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=51&dexer-id=&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function arbiuniswapv3(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=51&dexer-id=1478&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
async function arbisushi(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=51&dexer-id=1464&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function arbikyber(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=51&dexer-id=3627&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function arbicamelot(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=51&dexer-id=5101&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function arbialien(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=51&dexer-id=6082&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function arbizyber(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=51&dexer-id=5834&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function arbioreo(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=51&dexer-id=5558&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function arbiarbi(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=51&dexer-id=5558&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function arbisharky(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=51&dexer-id=6093&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function polymain(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=25&dexer-id=1567&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function polyuniswapv3(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=25&dexer-id=1567&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function polymmf(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=25&dexer-id=1704&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function polyquickswap(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=25&dexer-id=1293&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function polysushi(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=25&dexer-id=1417&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function polykyber(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=25&dexer-id=1695&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function polyape(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=25&dexer-id=1466&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function pulsemain(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=189&dexer-id=7126&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function pulseXv1(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=189&dexer-id=7126&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function pulseXv2(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=189&dexer-id=7342&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function bitmain(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=189&dexer-id=7126&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function shibdogswap(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=201&dexer-id=8167&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function shibwoofswap(req: Request, res: Response) {
  try {
    const response = await axios.get('https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=201&dexer-id=8172&sort-field=txs24h&desc=true&page=1&pageSize=50',{
        headers: {
        },
      });
    const data = response.data;

    res.json(data);
  } catch (error) {
    const e = error as AxiosError
    console.error('Error fetching data from CoinMarketCap:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Export the function
export { getethuniv3,getethuniswap,getethsushi,getethpan, getethshibaswap, getethdefiswap, getethkyberswap,
getethfraxswap, getethswaper, getethradio,bnbbaryon,bnbw3,bnbbakery,bnbcone,bnbknight, bnbnomi,  bnbkyber,bnbfst,bnbbaby,bnbmedx, bnbpan ,bnbape,bnbbiswap,bnbpanv3, 
arbimain, arbiuniswapv3,arbisushi,arbikyber,arbicamelot,arbialien,arbizyber, arbioreo, arbiarbi,arbisharky,
polymain,polyuniswapv3,polymmf,polyquickswap,polysushi,polykyber,polyape,
pulsemain,pulseXv1,pulseXv2,
bitmain,
shibdogswap,shibwoofswap};
