// StockDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StockDashboard.css';


const IEX_CLOUD_API_KEY = 'sk_0f3a1ceb0ea5417480c57fc36bc0f072'; // Replace with your actual API key

const StockDashboard = () => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://cloud.iexapis.com/stable/stock/market/batch?symbols=aapl,googl,amzn,msft&types=quote&token=${IEX_CLOUD_API_KEY}`
        );
        setStockData(Object.values(response.data));
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Stock Market Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Company Name</th>
            <th>Latest Price</th>
            <th>Change</th>
            <th>Change Percent</th>
          </tr>
        </thead>
        <tbody>
          {stockData.map((stock) => (
            <tr key={stock.quote.symbol}>
              <td>{stock.quote.symbol}</td>
              <td>{stock.quote.companyName}</td>
              <td>{stock.quote.latestPrice}</td>
              <td>{stock.quote.change}</td>
              <td>{stock.quote.changePercent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockDashboard;
