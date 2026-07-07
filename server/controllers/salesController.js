const pool = require("../config/db");

// Add Sale
const addSale = async (req, res) => {
  try {
    const {
      product_name,
      category,
      quantity,
      price,
      total,
      sale_date,
    } = req.body;

    const result = await pool.query(
      `INSERT INTO sales
      (product_name, category, quantity, price, total, sale_date)
      VALUES ($1,$2,$3,$4,$5,$6)
      RETURNING *`,
      [product_name, category, quantity, price, total, sale_date]
    );

    res.status(201).json({
      message: "Sale added successfully",
      sale: result.rows[0],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Get All Sales
const getSales = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM sales ORDER BY id DESC"
    );

    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Get Sale By ID
const getSaleById = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM sales WHERE id=$1",
      [req.params.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Sale not found",
      });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Update Sale
const updateSale = async (req, res) => {
  try {
    const {
      product_name,
      category,
      quantity,
      price,
      total,
      sale_date,
    } = req.body;

    const result = await pool.query(
      `UPDATE sales
       SET product_name=$1,
           category=$2,
           quantity=$3,
           price=$4,
           total=$5,
           sale_date=$6
       WHERE id=$7
       RETURNING *`,
      [
        product_name,
        category,
        quantity,
        price,
        total,
        sale_date,
        req.params.id,
      ]
    );

    res.status(200).json({
      message: "Sale updated successfully",
      sale: result.rows[0],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Delete Sale
const deleteSale = async (req, res) => {
  try {
    await pool.query(
      "DELETE FROM sales WHERE id=$1",
      [req.params.id]
    );

    res.status(200).json({
      message: "Sale deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  addSale,
  getSales,
  getSaleById,
  updateSale,
  deleteSale,
};