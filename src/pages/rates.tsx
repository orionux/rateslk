import React, { useState, useEffect } from 'react';

const Rates: React.FC = () => {
  const [exchangeRates, setExchangeRates] = useState<any>(null); // You might want to replace 'any' with a more specific type

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const apiKey = '0f9cc0bf1c28690c09d2590e'; // Replace with your Open Exchange Rates API key
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`);
        const data = await response.json();
        setExchangeRates(data.conversion_rates); // Corrected line
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    fetchExchangeRates();
  }, []);

  const renderPrices = (currency: string) => {
    if (!exchangeRates) {
      return (
        <div key={currency}>
          <p>{currency}</p>
          <p>Buying Price: N/A</p>
          <p>Selling Price: N/A</p>
        </div>
      );
    }

    const buyingPrice = exchangeRates[currency];
    const sellingPrice = 1 /buyingPrice;

    if (isNaN(buyingPrice) || isNaN(sellingPrice)) {
      return (
        <div key={currency}>
          <p>{currency}</p>
          <p>Invalid exchange rates</p>
        </div>
      );
    }

    return (
      <div key={currency}>
        <p>{currency}</p>
        <p>Buying Price: {buyingPrice}</p>
        <p>Selling Price: {sellingPrice}</p>
      </div>
    );
  };

  return (
    <div>

      {exchangeRates && (
        <>
          {renderPrices('LKR')} {/* Example for India */}
          {renderPrices('USD')} {/* Example for United States */}
          {/* Add more countries as needed */}
        </>
      )}
    </div>
  );

  

};

export default Rates;
