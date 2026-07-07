import "./Navbar.css";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  const today = new Date().toLocaleDateString();

  return (
    <div className="navbar">
      <div>
        <h2>Dashboard</h2>
        <p>{today}</p>
      </div>

      <div className="user-info">
        <span>Welcome, {user?.name || "Admin"}</span>
      </div>
    </div>
  );
}

export default Navbar;