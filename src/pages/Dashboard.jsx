import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>
      <ul>
        <li><Link to="/inventory">Inventory</Link></li>
        <li><Link to="/expense">Expense</Link></li>
        <li><Link to="/sales">Sales</Link></li>
      </ul>
    </div>
  );
};

export default Dashboard;
