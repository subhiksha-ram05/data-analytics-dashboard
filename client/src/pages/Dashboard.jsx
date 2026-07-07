import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/Dashboard.css";
import KPICards from "../components/KPICards";
import SalesChart from "../components/SalesChart";
import CategoryChart from "../components/CategoryChart";

function Dashboard() {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-content">
        <Navbar />

        <div className="dashboard-body">
  <h1>Welcome to Data Analytics Dashboard 📊</h1>

  <p>Monitor your sales performance in real time.</p>

  <KPICards />

  <SalesChart />

  <CategoryChart />
</div>
      </div>
    </div>
  );
}

export default Dashboard;