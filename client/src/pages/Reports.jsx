import { useEffect, useState } from "react";
import API from "../services/api";

function Reports() {
  const [stats, setStats] = useState({
    totalSales: 0,
    revenue: 0,
    products: 0,
  });

  useEffect(() => {
    fetchReport();
  }, []);

  const fetchReport = async () => {
    try {
      const res = await API.get("/sales");

      const sales = res.data;

      const revenue = sales.reduce(
        (sum, sale) => sum + Number(sale.total),
        0
      );

      setStats({
        totalSales: sales.length,
        revenue,
        products: sales.length,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Reports</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            background: "#2563eb",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>{stats.totalSales}</h2>
          <p>Total Sales</p>
        </div>

        <div
          style={{
            background: "#16a34a",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>₹ {stats.revenue}</h2>
          <p>Total Revenue</p>
        </div>

        <div
          style={{
            background: "#f59e0b",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>{stats.products}</h2>
          <p>Products Sold</p>
        </div>
      </div>
    </div>
  );
}

export default Reports;