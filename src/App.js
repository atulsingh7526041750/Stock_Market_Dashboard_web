// src/App.js
import React from 'react';
import LineChart from './StockDashboard/LineChart';
import BarChart from './StockDashboard/BarChart';
import PieChart from './StockDashboard/PieChart';
// import LoginComponent from './LoginComponent/LoginComponent';
// import StockDashboard from './StockDashboard/StockDashboard';

const App = () => {
  return (
    <div className="app">
      {/* Other components or content */}
      {/* <LoginComponent /> */}
      {/* <StockDashboard /> */}
      <LineChart/>
      <BarChart/>
      <PieChart/>
    </div>
  );
};

export default App;
