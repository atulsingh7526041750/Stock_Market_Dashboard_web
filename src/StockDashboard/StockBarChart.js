// StockBarChart.js
import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const StockBarChart = ({ chartData, options }) => {
  useEffect(() => {
    // Cleanup previous chart instance before rendering a new one
    return () => {
      const chart = this.chartInstance;
      if (chart) {
        chart.destroy();
      }
    };
  }, []);

  return <Bar ref={(ref) => (this.chartInstance = ref)} data={chartData} options={options} />;
};

export default StockBarChart;
