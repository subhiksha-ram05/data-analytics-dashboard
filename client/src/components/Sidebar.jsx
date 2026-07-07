import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <h2>Analytics</h2>

      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/sales">Sales</Link>
        <Link to="/reports">Reports</Link>
      </nav>

      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Sidebar;