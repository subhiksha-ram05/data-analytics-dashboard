import { useEffect, useState } from "react";
import API from "../services/api";
import "./KPICards.css";

function KPICards() {
  const [stats, setStats] = useState({
    revenue: 0,
    sales: 0,
    quantity: 0,
    average: 0,
  });

  useEffect(() => {
    fetchSales();
  }, []);

  const fetchSales = async () => {
    try {
      const res = await API.get("/sales");

      const sales = res.data;

      const revenue = sales.reduce(
        (sum, item) => sum + Number(item.total),
        0
      );

      const quantity = sales.reduce(
        (sum, item) => sum + Number(item.quantity),
        0
      );

      setStats({
        revenue,
        sales: sales.length,
        quantity,
        average: sales.length
          ? (revenue / sales.length).toFixed(2)
          : 0,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="kpi-grid">
      <div className="card">
        <h3>Total Revenue</h3>
        <h2>₹ {stats.revenue}</h2>
      </div>

      <div className="card">
        <h3>Total Sales</h3>
        <h2>{stats.sales}</h2>
      </div>

      <div className="card">
        <h3>Items Sold</h3>
        <h2>{stats.quantity}</h2>
      </div>

      <div className="card">
        <h3>Average Sale</h3>
        <h2>₹ {stats.average}</h2>
      </div>
    </div>
  );
}

export default KPICards;