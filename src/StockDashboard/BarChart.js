// BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Monthly Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(75,192,192,0.6)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
    scales: {
        x: {
          type: 'category',
        },
        y: {
          type: 'linear',
        },
      }
  };
 

  return (
    <div>
      <h2>Bar Chart</h2>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;
