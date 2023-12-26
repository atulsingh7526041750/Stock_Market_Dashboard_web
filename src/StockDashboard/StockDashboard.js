// StockDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StockBarChart from './StockBarChart';
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

  const chartData = {
    labels: stockData.map((stock) => stock.quote.symbol),
    datasets: [
      {
        label: 'Latest Price',
        data: stockData.map((stock) => stock.quote.latestPrice),
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        indexAxis: 'category',
      },
      y: {
        type: 'linear',
      },
    },
  };

  return (
    <div>
      <h1>Stock Market Dashboard</h1>
      <StockBarChart chartData={chartData} options={chartOptions} />
    </div>
  );
};

export default StockDashboard;
