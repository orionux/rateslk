import React, { useState, useEffect } from 'react';

const Rates: React.FC = () => {
  const [exchangeRates, setExchangeRates] = useState<any>(null);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await fetch('/api/getExchangeRates');
        const data = await response.json();
        setExchangeRates(data);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    fetchExchangeRates();
  }, []);

  return (
    <div>
      <h1>Exchange Rates</h1>
      {exchangeRates && (
        <div key={''}>
          <p>Buying Rate: {exchangeRates.buyingRate}</p>
          <p>Selling Rate: {exchangeRates.sellingRate}</p>
        </div>
      )}
    </div>
  );

};

export default Rates;
