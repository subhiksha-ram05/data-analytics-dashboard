import { useEffect, useState } from "react";
import API from "../services/api";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/Sales.css";
import { saveAs } from "file-saver";
import Papa from "papaparse";


function Sales() {
  const [sales, setSales] = useState([]);

  const [form, setForm] = useState({
    product_name: "",
    category: "",
    quantity: "",
    price: "",
    total: "",
    sale_date: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchSales();
  }, []);

  const fetchSales = async () => {
    try {
      const res = await API.get("/sales");
      setSales(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addSale = async (e) => {
  e.preventDefault();

  try {
    if (editingId) {
      await API.put(`/sales/${editingId}`, form);
      alert("Sale Updated Successfully");
    } else {
      await API.post("/sales", form);
      alert("Sale Added Successfully");
    }

    setEditingId(null);

    setForm({
      product_name: "",
      category: "",
      quantity: "",
      price: "",
      total: "",
      sale_date: "",
    });

    fetchSales();

  } catch (err) {
  console.log(err);
  console.log(err.response);

  alert(
    err.response?.data?.message ||
    err.response?.data?.error ||
    err.message
  );
}
};

  const deleteSale = async (id) => {
    if (!window.confirm("Delete this sale?")) return;

    try {
      await API.delete(`/sales/${id}`);
      fetchSales();
    } catch (err) {
      console.log(err);
    }
  };
  const exportCSV = () => {
  const headers = [
    "ID",
    "Product",
    "Category",
    "Quantity",
    "Price",
    "Total",
    "Sale Date",
  ];

  const rows = sales.map((sale) => [
    sale.id,
    sale.product_name,
    sale.category,
    sale.quantity,
    sale.price,
    sale.total,
    sale.sale_date?.substring(0, 10),
  ]);

  const csvContent = [
    headers.join(","),
    ...rows.map((row) => row.join(",")),
  ].join("\n");

  const blob = new Blob([csvContent], {
    type: "text/csv;charset=utf-8;",
  });

  saveAs(blob, "sales_report.csv");
};
const importCSV = (event) => {
  const file = event.target.files[0];

  if (!file) return;

  Papa.parse(file, {
    header: true,
    skipEmptyLines: true,

    complete: async (results) => {
      try {
        for (const sale of results.data) {
          await API.post("/sales", {
            product_name: sale.product_name,
            category: sale.category,
            quantity: Number(sale.quantity),
            price: Number(sale.price),
            total: Number(sale.total),
            sale_date: sale.sale_date,
          });
        }

        alert("CSV Imported Successfully!");

        fetchSales();

      } catch (err) {
        console.log(err);
        alert("Import Failed");
      }
    },
  });
};

  const editSale = (sale) => {
  setEditingId(sale.id);

  setForm({
    product_name: sale.product_name,
    category: sale.category,
    quantity: sale.quantity,
    price: sale.price,
    total: sale.total,
    sale_date: sale.sale_date.substring(0, 10),
  });
};

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-content">
        <Navbar />

        <div className="sales-page">

          <h2>Add Sale</h2>

          <form className="sale-form" onSubmit={addSale}>
            <input
              name="product_name"
              placeholder="Product Name"
              value={form.product_name}
              onChange={handleChange}
              required
            />

            <input
              name="category"
              placeholder="Category"
              value={form.category}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              value={form.quantity}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="price"
              placeholder="Price"
              value={form.price}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="total"
              placeholder="Total"
              value={form.total}
              onChange={handleChange}
              required
            />

            <input
              type="date"
              name="sale_date"
              value={form.sale_date}
              onChange={handleChange}
              required
            />

            <button>
  {editingId ? "Update Sale" : "Add Sale"}
</button>
          </form>
          <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
  <button onClick={exportCSV}>
    Export CSV
  </button>

  <label className="import-btn">
    Import CSV

    <input
      type="file"
      accept=".csv"
      hidden
      onChange={importCSV}
    />
  </label>
</div>

          <h2>Sales Records</h2>
          <input
  type="text"
  placeholder="Search by Product or Category..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="search-box"
/>

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Product</th>
                <th>Category</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
  {sales
    .filter((sale) => {
      return (
        sale.product_name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        sale.category
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    })
    .map((sale) => (
      <tr key={sale.id}>
        <td>{sale.id}</td>
        <td>{sale.product_name}</td>
        <td>{sale.category}</td>
        <td>{sale.quantity}</td>
        <td>₹ {sale.price}</td>
        <td>₹ {sale.total}</td>
        <td>{sale.sale_date?.substring(0, 10)}</td>
        <td>
          <button
            className="edit-btn"
            onClick={() => editSale(sale)}
          >
            Edit
          </button>

          <button
            className="delete-btn"
            onClick={() => deleteSale(sale.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    ))}
</tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

export default Sales;