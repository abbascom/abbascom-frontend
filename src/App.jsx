import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Dashboard from "./pages/Dashboard";
import InventoryList from "./components/Inventory/InventoryList";
import ExpenseList from "./components/Expense/ExpenseList";
import SalesList from "./components/Sales/SalesList";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inventory" element={<InventoryList />} />
        <Route path="/expense" element={<ExpenseList />} />
        <Route path="/sales" element={<SalesList />} />
      </Routes>
    </Router>
  );
}

export default App;
