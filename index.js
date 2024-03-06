const axios = require('axios');

async function getCryptoPricesForAllTime() {
    try {
        // Fetch Bitcoin price data
        const btcResponse = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=max');
        const btcPrices = btcResponse.data.prices;

        // Fetch Ethereum price data
        const ethResponse = await axios.get('https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=max');
        const ethPrices = ethResponse.data.prices;

        // Calculate average prices
        let totalBtcPrice = 0;
        let totalEthPrice = 0;

        for (let i = 0; i < btcPrices.length; i++) {
            totalBtcPrice += btcPrices[i][1]; // BTC price data format: [timestamp, price]
        }
        const averageBtcPrice = totalBtcPrice / btcPrices.length;

        for (let i = 0; i < ethPrices.length; i++) {
            totalEthPrice += ethPrices[i][1]; // ETH price data format: [timestamp, price]
        }
        const averageEthPrice = totalEthPrice / ethPrices.length;

        console.log('Average Bitcoin price for all time:', averageBtcPrice.toFixed(2), 'USD');
        console.log('Average Ethereum price for all time:', averageEthPrice.toFixed(2), 'USD');
    } catch (error) {
        console.error('Error fetching cryptocurrency prices:', error.message);
    }
}

// Call the function to fetch cryptocurrency prices
getCryptoPricesForAllTime();
