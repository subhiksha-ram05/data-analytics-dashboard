import { useEffect, useState } from "react";
import API from "../services/api";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

import "./SalesChart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

function SalesChart() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    fetchSales();
  }, []);

  const fetchSales = async () => {
    try {
      const res = await API.get("/sales");

      const sales = res.data;

      const monthlyData = {};

      sales.forEach((sale) => {
        const month = new Date(sale.sale_date).toLocaleString("default", {
          month: "short",
        });

        monthlyData[month] =
          (monthlyData[month] || 0) + Number(sale.total);
      });

      setChartData({
        labels: Object.keys(monthlyData),
        datasets: [
          {
            label: "Revenue",
            data: Object.values(monthlyData),
            backgroundColor: "#2563eb",
          },
        ],
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="chart-card">
      <h2>Monthly Revenue</h2>

      <Bar data={chartData} />
    </div>
  );
}

export default SalesChart;