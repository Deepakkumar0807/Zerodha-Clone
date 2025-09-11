import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // Use local data instead of API call
    try {
      const { orders: ordersData } = require("../data/data");
      setOrders(ordersData || []);
    } catch (error) {
      // Fallback data if orders export is not available
      setOrders([
        {
          name: "RELIANCE",
          qty: 10,
          price: 2480.75,
          mode: "BUY"
        },
        {
          name: "TCS",
          qty: 5,
          price: 3150.25,
          mode: "SELL"
        },
        {
          name: "HDFC BANK",
          qty: 15,
          price: 1680.90,
          mode: "BUY"
        }
      ]);
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <h3 className="title">Orders</h3>
        <p>Loading orders...</p>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">Get started</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="order-table">
      <h3 className="title">Orders ({orders.length})</h3>
      <table>
        <thead>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o, i) => (
            <tr key={i}>
              <td>{o.name}</td>
              <td>{o.qty}</td>
              <td>{typeof o.price === 'number' ? o.price.toFixed(2) : o.price}</td>
              <td>{o.mode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;