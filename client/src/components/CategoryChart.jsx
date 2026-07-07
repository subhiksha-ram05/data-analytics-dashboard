import { useEffect, useState } from "react";
import API from "../services/api";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

import "./CategoryChart.css";

ChartJS.register(ArcElement, Tooltip, Legend);

function CategoryChart() {
  const [data, setData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await API.get("/sales");

      const sales = res.data;

      const categories = {};

      sales.forEach((sale) => {
        categories[sale.category] =
          (categories[sale.category] || 0) + Number(sale.total);
      });

      setData({
        labels: Object.keys(categories),
        datasets: [
          {
            data: Object.values(categories),
            backgroundColor: [
              "#2563eb",
              "#16a34a",
              "#f59e0b",
              "#ef4444",
              "#8b5cf6",
              "#14b8a6",
            ],
          },
        ],
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="pie-card">
      <h2>Sales by Category</h2>

      <Pie data={data} />
    </div>
  );
}

export default CategoryChart;